import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';

const AnswerDisplay = ({ answer }) => (
  <div>
    {answer ? (
      <div>
        <Markdown className='answers' source={answer.body} />
      </div>
    ) : (
      <div>Display Answer...</div>
    )}
  </div>
);

const AnswersList = ({ answers }) => (
  <div>
    {answers ? (
      answers.map(answer => (
        <AnswerDisplay key={answer.answer_id} answer={answer} />
      ))
    ) : (
      <div>...Loading</div>
    )}
  </div>
);
/**
 * Get the list of questions from the application's state
 * It is populated by a ../sagas/fetch-answer(s)-saga.
 */
const mapStateToProps = ({ answers }) => ({
  answers
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(AnswersList);
