export default (state = [], action: any) => {
  switch (action.type){
    case 'ADD_POST':
      return [...state, action.payload]
    default:
      return state;
  }
}
