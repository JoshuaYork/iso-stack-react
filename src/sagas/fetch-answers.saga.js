import { takeEvery, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

export default function * () {
    /**
     * Every time REQUEST_FETCH_ANSWER, fork a handleFetchAnswer process for it
     */
    yield takeEvery(`REQUEST_FETCH_ANSWER`,handleFetchAnswer);
}

/**
 * Fetch question details from the local proxy API
 */
function * handleFetchAnswer ({answer_id}) {
    const raw = yield fetch(`/api/answers/${answer_id}`);
    const json = yield raw.json();
    const answer = json.items[0];
    /**
     * Notify application that answer has been fetched
     */
    yield put({type:`FETCHED_ANSWER`,answer});
}