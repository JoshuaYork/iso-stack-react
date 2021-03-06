import React from 'react';
import Markdown from 'react-markdown';
import TagsList from './TagsList';
import { connect } from 'react-redux';
import AnswersList from './AnswersList';

/**
 * Question Detail Display outputs a view containing question information when passed a question
 * as its prop
 * If no question is found, that means the saga that is loading it has not completed, and display an interim message
 */
const goodDate = date => {
  return new Date(date * 1000).toLocaleDateString();
};
const QuestionDetailDisplay = ({
  title,
  body,
  answer_count,
  tags,
  creation_date,
  question_id
}) => (
  <div>
    <h3 className='mb-2'>{title}</h3>
    {body ? (
      <div>
        <div className='mb-3'>
          <TagsList tags={tags} />
        </div>
        <div>posted on {goodDate(creation_date)}</div>
        <Markdown className='question' source={body} />
        <h2>{answer_count} Answers</h2>
        <div>
          <AnswersList />
        </div>
      </div>
    ) : (
      <div>
        {/* If saga has not yet gotten question details, display loading message instead. */}
        <h4>Loading Question...</h4>
      </div>
    )}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  /**
   * Find the question in the state that matches the ID provided and pass it to the display component
   */
  ...state.questions.find(
    ({ question_id }) => question_id == ownProps.question_id
  )
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(QuestionDetailDisplay);
