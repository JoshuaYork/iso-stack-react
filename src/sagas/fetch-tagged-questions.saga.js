import {
    put,
    take,
    takeEvery
} from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';
/**
 * Fetch questions saga gets a list of all 
 * questions with a specific tag in response to a particular view being loaded
 */
export default function* () {
    /**
     * Every time REQUEST_FETCH_TAGGED_QUESTIONS, fork a handleFetchQuestion process for it
     */
    yield takeEvery(`REQUEST_FETCH_TAGGED_QUESTIONS`, handleFetchQuestion);
}

function* handleFetchQuestion({
    tag
}) {
    const raw = yield fetch(`/api/tags/${tag}`);
    const json = yield raw.json();
    const questions = json.items;
    /**
     * Notify application that questions has been fetched
     */
    yield put({
        type: `FETCHED_TAGGED_QUESTIONS`,
        questions
    });
}