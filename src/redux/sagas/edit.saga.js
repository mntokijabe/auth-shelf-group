import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* editItem(action) {
    console.log('Hello??', action.payload)
    try{ 
        yield axios.put(`/api/shelf`, action.payload)
        console.log('Response data is', action.payload)
        yield put({
            type: 'GET_ITEMS'
        });
    } catch (error) {
        console.log('Error editting item', error);
    }
}

function* editItems() {
    yield takeLatest('EDIT_ITEM', editItem)
}

export default editItems;