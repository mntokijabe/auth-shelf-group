import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem (action) {
try{

} catch (error) {
    console.log('addItem POST request failed ', error)
}
}

function* addItemSaga() {
    yield takeLatest('ADD_ITEM', addItem);
  }
export default addItemSaga