const defaultState = {
  topicSelectedIndex: 0,
  topics: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      return {
        ...state,
        topics: action.topics
      }
    case 'UPDATE_SELECTED_TOPIC':
      return {
        ...state,
        topicSelectedIndex: action.newTopicIndex
      }
    default:
      console.log("Unknown Common action")
      return state;
  }
};
