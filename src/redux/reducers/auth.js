const defaultState = {
  credentials: {
    token: null, id: null, name: null
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CREDENTIALS':
      console.log("Update credentials")
      return {
        ...defaultState,
        credentials: { token: action.credentials.token, id: action.credentials.id, name: action.credentials.name }
      }
    default:
      console.log("Unknown Authentication action")
      return state;
  }
};