import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchMyItems(action) {
    console.log('payload for my id is ',action.payload)

  try {
    const response = yield axios.get(`/api/myshelf/${action.payload}`);
    console.log('response data is',response)
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* getMyShelfItems() {
    yield takeLatest('GET_MY_ITEMS',fetchMyItems)
}
export default getMyShelfItems;
