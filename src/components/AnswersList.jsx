import React from "react";
import { connect } from "react-redux";

const AnswerDisplay = ({ answer }) => (
  <div>{answer ? <div>Answer stuff</div> : <div>Display Answer...</div>}</div>
);

const AnswersList = ({ answers }) => {
  console.log("answers: ", answers);

  return (
    <div>
      {answers ? (
        answers.map(answer => <AnswerDisplay answer={answer} />)
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
};
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
