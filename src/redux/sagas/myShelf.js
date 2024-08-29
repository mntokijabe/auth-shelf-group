import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchMyItems(action) {
  try {
    console.log('payload for my id is ',action.payload)
    const response = yield axios.get('/api/shelf/${action.payload');
    console.log('response data is',response)
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* getMyShelfItems() {
    yield takeLatest('GET_ITEMS',fetchMyItems)
}
export default getMyShelfItems;
