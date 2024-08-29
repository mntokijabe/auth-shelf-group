import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchItems() {
  try {
    const response = yield axios.get('/api/shelf');
    console.log('response data is',response)
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* getShelfItems() {
    yield takeLatest('GET_ITEMS',fetchItems)
}
export default getShelfItems;
