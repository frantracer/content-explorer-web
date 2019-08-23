const defaultState = {
  subscriptions: [],
  subscriptionsIndexes: {}
};
  
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_SUBSCRIPTIONS':
      return {
        ...state,
        subscriptions: action.subscriptions,
        subscriptionsIndexes: action.subscriptionsIndexes
      }
    default:
      console.log("Unknown Subscription action")
      return state;
  }
};
