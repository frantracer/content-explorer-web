const defaultState = {
  credentials: {
    sid: null,
    picture_url: null,
    name: null
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CREDENTIALS':
      console.log("Update credentials")
      return {
        ...state,
        credentials: { 
          sid: action.credentials.sid,
          picture_url: action.credentials.picture_url,
          name: action.credentials.name }
      }
    default:
      console.log("Unknown Authentication action")
      return state;
  }
};