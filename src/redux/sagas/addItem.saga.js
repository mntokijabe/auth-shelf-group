import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem (action) {
    console.log('in the addItem saga the action.payload is', action.payload)
    try{
        yield axios.post('/api/shelf', action.payload)
        //put luke and elwoods function below.
    } catch (error) {
        console.log('addItem POST request failed ', error)
    }
}

function* addItemSaga() {
    yield takeLatest('ADD_ITEM', addItem);
  }
export default addItemSaga