const axios = require('axios');
const connection = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ADDRESS,
  timeout: 10000,
  withCredentials: true
});

export const setContentItems = (topics) => {
  return { type: 'UPDATE_CONTENT', topics : topics };
}

export const loadContentItems = () => {

  return function (dispatch) {

    return connection.request(
      {
        url: '/contentmarks',
        method: 'get'
      }
    ).then(
      response => {
        // Parse API response
        const items = response.data.data.items

        var topics = items.map(item => {
          return {
            "id": item.id,
            "name": item.name,
            "feeds": item.feeds.map((feed) => {
              return {
                title: feed.title,
                src: feed.link,
                thumbnail: feed.thumbnail,
                type: feed.type
              }
            })
          }
        })

        const summary = {"id": null, name: "Summary", feeds: []}
        topics = [summary].concat(topics)

        dispatch(setContentItems(topics))
      },
      error => console.log('An error occurred.', error)
    );

  }

}

export const unloadContentItems = () => {
  return setContentItems([]);
}

export const setSelectedTopic = (newTopicIndex) => {
  return { type: 'UPDATE_SELECTED_TOPIC', newTopicIndex: newTopicIndex };
}

export const loadCredentials = (credentials) => {
  return { type: 'UPDATE_CREDENTIALS', credentials: credentials };
}

export const createNewTopic = (newTopic) => {
  return function (dispatch) {
    return connection.request(
      {
        url: '/contentmarks',
        method: 'post',
        data: {
          name: newTopic
        }
      }
    ).then(
      response => {
        dispatch(loadContentItems())
      },
      error => console.log('An error occurred.', error)
    );
  }
}

export const deleteTopic = (topic) => {
  return function (dispatch) {
    return connection.request(
      {
        url: `/contentmarks/${topic.id}`,
        method: 'delete'
      }
    ).then(
      response => {
        dispatch(loadContentItems())
      },
      error => console.log('An error occurred.', error)
    );
  }
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
        const data = response.data.data
        const credentials = {
          sid: data.sid,
          picture_url: data.picture_url,
          name: data.name
        }
        dispatch(loadCredentials(credentials))
        dispatch(loadContentItems())
      },
      error => console.log('An error occurred.', error)
    );
  }
}

export const logout = () => {
  return function (dispatch) {
    return connection.request(
      {
        url: '/logout',
        method: 'post'
      }
    ).then(
      response => {
        dispatch(unloadContentItems())
        dispatch(loadCredentials({sid: null, picture_url: null, name: null}))
      },
      error => console.log('An error occurred.', error)
    );
  }
}
