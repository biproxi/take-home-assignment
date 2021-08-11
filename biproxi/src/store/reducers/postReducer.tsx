const reducers = (state: (string|number)[] = [], action: any) => {
  switch (action.type){
    case 'ADD_POST':
      return [...state, action.payload];
    case 'GET_POSTS':
    case 'GET_ARCHIVED_POSTS':
      return action.payload;
    // case 'DELETE_POST':
    //   return {
    //     ...state,
    //     items: state.items.filter(item => item !== action.payload.id)
    //   }
    default:
      return state;
  }
}

export default reducers;