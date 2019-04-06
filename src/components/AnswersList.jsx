import React from "react";
import { connect } from "react-redux";

const AnswerDisplay = ({answer}) => {
  <div>Display Answer...</div>;
};

const AnswersList = ({answers}) => (
  
  <div>
    {answers ? (
      answers.map(answer => <AnswerDisplay answer={answer} />)
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
