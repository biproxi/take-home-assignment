export default (state = [], action: any) => {
  switch (action.type){
    case 'ADD_POST':
      return [...state, action.payload];
    case 'GET_POSTS':
      return action.payload;
    default:
      return state;
  }
}
