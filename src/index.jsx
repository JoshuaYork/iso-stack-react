/**
 * This is the main entry point of the client application and is loaded by Webpack.
 * It is NOT loaded by the server at any time as the configurations used (i.e.,browserHistory) only work in the client context.
 * The server may load the App component when server rendering.
 */
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import getStore from './getStore';
import { createBrowserHistory } from 'history';
import styles from '../public/index.css';
import queryString from 'query-string';

const history = createBrowserHistory();
const store = getStore(history);

if (module.hot) {
  /**
   * If using hot module reloading, watch for any changes to App or its descendent modules.
   * Then, reload the application without restarting or changing the reducers, storeo r state.
   */
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

/**
 * Render the app,
 * encapsulated inside a router, which will automatically let Route tags render based on the Redux store,
 * which itself is encapsulated inside a provider, which gives child connected components access to the Redux store
 */
const render = _App => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <_App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('AppContainer')
  );
};

/**
 * Listen for changes to the store
 */
store.subscribe(() => {
  const state = store.getState();
  /**
   * When the questions array is populated, that means the saga round trip has completed,
   * and the application can be rendered.
   * Rendering before the questions arrived would result in the server-generated content being replaced with
   * a blank page.
   */
  if (state.questions.length > 0) {
    render(App);
  }
});

/**
 * Reads the current path, which corresponds to the route the user is seeing, and makes a request
 * the the appropriate saga to fetch any data that might be required.
 * @param location
 * The current URL that is loaded
 */
const fetchDataForLocation = location => {
  /**
   * If the location is the standard route, fetch an undetailed list of all questions
   **/

  if (location.pathname === '/') {
    const parsedSearch = queryString.parse(location.search);
    store.dispatch({
      type: `REQUEST_FETCH_QUESTIONS_PAGED`,
      page: !parsedSearch.page ? 1 : parsedSearch.page,
      pagesize: !parsedSearch.pagesize ? 30 : parsedSearch.pagesize
    });
  }

  /*   if (location.pathname === '/questions') {
    const parsedSearch = queryString.parse(location.search);
    store.dispatch({
      type: `REQUEST_FETCH_QUESTIONS_PAGED`,
      page: !parsedSearch.page ? 1 : parsedSearch.page,
      pagesize: !parsedSearch.pagesize ? 30 : parsedSearch.page
    });
  } */

  /**
   * If the location is the details route, fetch details for one question
   */
  if (location.pathname.includes(`questions`)) {
    store.dispatch({
      type: `REQUEST_FETCH_QUESTION`,
      question_id: location.pathname.split('/')[2]
    });

    store.dispatch({
      type: `REQUEST_FETCH_ANSWERS`,
      question_id: location.pathname.split('/')[2]
    });
  }

  /**
   * If the location is the tag route, fetch questions with specified tag
   */
  if (location.pathname.includes('tag')) {
    store.dispatch({
      type: `REQUEST_FETCH_TAGGED_QUESTIONS`,
      tag: location.pathname.split('/')[2]
    });
  }
};
/**
 * Initialize data fetching procedure
 */
fetchDataForLocation(history.location);

/**
 * Listen to changes in path, and trigger
 * data fetching procedure on any relevant changes
 */
history.listen(fetchDataForLocation);
