const axios = require('axios');

export const setContentItems = (topics, itemsPerTopic) => {
  return { type: 'UPDATE_CONTENT', topics : topics, itemsPerTopic: itemsPerTopic };
}

export const loadContentItems = () => {

  return function (dispatch) {

    return axios.request(
      'http://localhost:3000/api/contentmarks',
      {
        method: 'get',
        headers: {
          'sid': 'mysid'
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
