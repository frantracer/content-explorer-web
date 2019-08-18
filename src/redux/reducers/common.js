const defaultState = {
  topicSelected: "Summary",
  topics: [],
  itemsPerTopic : {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      return {
        ...state,
        topics: (action.topics.length > 0 ? [{name: "Summary", id: null }].concat(action.topics) : []),
        itemsPerTopic: action.itemsPerTopic
      }
    case 'UPDATE_SELECTED_TOPIC':
      return {
        ...state,
        topicSelected: action.newTopic
      }
    default:
      console.log("Unknown Common action")
      return state;
  }
};
