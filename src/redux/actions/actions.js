const axios = require('axios');
const connection = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ADDRESS,
  timeout: 5000
});

export const setContentItems = (topics, itemsPerTopic) => {
  return { type: 'UPDATE_CONTENT', topics : topics, itemsPerTopic: itemsPerTopic };
}

export const loadContentItems = () => {

  return function (dispatch, getState) {

    return connection.request(
      {
        url: '/contentmarks',
        method: 'get',
        headers: {
          'sid': getState().auth.credentials.sid
        }
      }
    ).then(
      response => {
        // Parse API response
        const items = response.data.items

        const topics = items.map( item => item.name )

        const itemsPerTopic = {}
        items.forEach(
          item => {
            let name = item.name
            let items = item.resources.flatMap(
              resource => resource.feeds.map(
                feed => { return { title: feed.name, src: feed.link, type: resource.type } }
              )
            )
            itemsPerTopic[name] = items
          }
        )

        dispatch(setContentItems(topics, itemsPerTopic))
      },
      error => console.log('An error occurred.', error)
    );

  }

}

export const unloadContentItems = () => {
  return setContentItems([], {});
}

export const setSelectedTopic = (newTopic) => {
  return { type: 'UPDATE_SELECTED_TOPIC', newTopic: newTopic };
}

export const loadCredentials = (credentials) => {
  return { type: 'UPDATE_CREDENTIALS', credentials: credentials };
}

export const validateGoogleCode = (code) => {
  return function (dispatch) {
    return connection.request(
      {
        url: '/login',
        method: 'post',
        data: {
          code: code
        }
      }
    ).then(
      response => {
        const credentials = {
          sid: response.data.sid,
          picture_url: response.data.picture_url,
          name: response.data.name
        }
        dispatch(loadCredentials(credentials))
        dispatch(loadContentItems())
      },
      error => console.log('An error occurred.', error)
    );
  }
}
