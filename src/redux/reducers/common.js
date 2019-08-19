const defaultState = {
  topicSelectedIndex: 0,
  topics: [],
  subscriptions: []
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
    case 'UPDATE_SUBSCRIPTIONS':
      return {
        ...state,
        subscriptions: action.subscriptions
      }
    default:
      console.log("Unknown Common action")
      return state;
  }
};
