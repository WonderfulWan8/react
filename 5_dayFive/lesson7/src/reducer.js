export function dataReducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'changeInput':
      newState.inputValue = action.payload;
      return newState;
    case 'addItem':
      newState.list = [...newState.list, action.payload];
      newState.inputValue = '';
      return newState;
    case 'deleteItem':
      newState.list = newState.list.filter((item, index) => {
        return index !== action.payload;
      });
      return newState;
    default:
      return state;
  }
}
 