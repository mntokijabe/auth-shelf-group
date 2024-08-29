
const shelfItemsReducer = (state = [], action) => {
    console.log('action payload is ',action.payload)
  switch (action.type) {
    case 'SET_SHELF':
      return action.payload;

    default:
      return state;
  }
};

export default shelfItemsReducer;