const defaultState = {
  textFilter: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT_FILTER':
      return {
        ...state,
        textFilter: action.text
      }
    default:
      console.log("Unknown Common action")
      return state;
  }
};