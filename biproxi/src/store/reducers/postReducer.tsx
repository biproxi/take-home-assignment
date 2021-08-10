const reducers = (state = [], action: any) => {
  switch (action.type){
    case 'ADD_POST':
      return [...state, action.payload];
    case 'GET_POSTS':
    case 'GET_ARCHIVED_POSTS':
      return action.payload;
    default:
      return state;
  }
}

export default reducers;