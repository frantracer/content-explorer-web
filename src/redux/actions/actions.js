const axios = require('axios');

export const setContentItems = (item_array) => {
  return { type: 'UPDATE_CONTENT', items : item_array };
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
        const item_array = response.data.items.flatMap(
          item => item.resources.flatMap(
            resource => resource.feeds.map(
              feed => { return { title: feed.name, src: feed.link, type: resource.type } } )))

        dispatch(setContentItems(item_array))
      },
      error => console.log('An error occurred.', error)
    );

  }

}

export const unloadContentItems = () => {
  return setContentItems([]);
}

export const loadCredentials = (credentials) => {
  return { type: 'UPDATE_CREDENTIALS', credentials: credentials };
}
