import {
    takeEvery,
    put
} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

export default function* () {
    /**
     * Every time REQUEST_FETCH_ANSWER, fork a handleFetchAnswer process for it
     */
    yield takeEvery(`REQUEST_FETCH_ANSWERS`, handleFetchAnswer);
}

/**
 * Fetch question details from the local proxy API
 */
function* handleFetchAnswer({
    question_id
}) {
    const raw = yield fetch(`/api/questions/${question_id}/answers`);
    const json = yield raw.json();
    const answers = json.items;
    /**
     * Notify application that answer has been fetched
     */
    yield put({
        type: `FETCHED_ANSWERS`,
        answers
    });
}