import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deleteItem(action) {
  try {
    yield axios.delete(`/api/shelf/${action.payload}`)
    console.log('response data is', action.payload)
    yield put({ type: 'GET_ITEMS' });
  } catch (error) {
    console.log('Error deleting item', error);
  }
}

function* deleteItems() {
    yield takeLatest('DELETE_ITEM',deleteItem)
}
export default deleteItems;
