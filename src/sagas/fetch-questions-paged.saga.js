
import {
    takeEvery,
    put
} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

export default function* () {
    /**
     * Every time REQUEST_FETCH_ANSWER, fork a handleFetchAnswer process for it
     */
    yield takeEvery(`REQUEST_FETCH_QUESTIONS_PAGED`, handleFetchQuestionsPaged);
}

/**
 * Fetch question details from the local proxy API
 */
function* handleFetchQuestionsPaged({
    page,
    pagesize

}) {
    const raw = yield fetch(`/api/questions?page=${page}&pagesize=${pagesize}`);
    const json = yield raw.json();
    const questions = json.items;
    /**
     * Notify application that answer has been fetched
     */
    yield put({
        type: `FETCHED_QUESTIONS_PAGED`,
        questions,
        page,
        pagesize
    });
}