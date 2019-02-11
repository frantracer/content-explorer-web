const defaultState = {
  items : []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      console.log("Update content")
      return {
        ...defaultState,
        items: action.items
      }
    default:
      console.log("Unknown Common action")
      return state;
  }
};