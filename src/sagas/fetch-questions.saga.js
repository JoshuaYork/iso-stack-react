import { put, take} from 'redux-saga/effects';

import fetch from 'isomorphic-fetch';

export default function* () {
    while (true) {
        yield take('REQUEST_FETCH_QUESTIONS');
        const raw = yield fetch('/api/questions');
        const json = yield raw.json();
        const questions = json.items;
        console.log("got questions..." ,questions);
        yield put({type:`FETCHED_QUESTIONS`, questions});
    }
}