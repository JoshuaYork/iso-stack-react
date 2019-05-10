import React, { useEffect } from 'react';
import TagsList from './TagsList';
import { connect } from 'react-redux';
import { Link, redirect } from 'react-router-dom';
import Markdown from 'react-markdown';

/**
 * Each entry in the QuestionList is represtented by a QuestionListItem, which displays high-level information
 * about a question in a format that works well in a list
 */
const QuestionListItem = ({
  tags,
  answer_count,
  title,
  view_count,
  question_id,
  is_answered,
  score
}) => (
  <div className='mb-3 list_item'>
    <h3>
      <Markdown source={title} />
    </h3>
    <div className='mb-2'>
      <TagsList tags={tags} />
    </div>
    <div className='stats'>
      <div className={is_answered ? 'stats_item answered' : 'stats_item'}>
        answers {answer_count}{' '}
      </div>
      <div className='stats_item'>views {view_count}</div>
      <div className='stats_item'>score {score}</div>
    </div>

    <div>
      <Link to={`/questions/${question_id}`}>More Info</Link>
    </div>
  </div>
);
const handleScroll = () => {
  const nextPage = page + 1;
  const url = location;
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    <Redirect to={url} push />;
  }
};

/**
 * Display all questions in an array provided to it as a simple list
 */
const QuestionList = ({ questions }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div>
      {questions ? (
        <div>
          {questions.map(question => (
            <QuestionListItem key={question.question_id} {...question} />
          ))}
        </div>
      ) : (
        <div>Loading questions...</div>
      )}
    </div>
  );
};

/**
 * Get the list of questions from the application's state
 * It is populated by a ../sagas/fetch-question(s)-saga.
 */
const mapStateToProps = ({ questions, page, pagesize, location }) => ({
  questions,
  page,
  pagesize,
  location
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(QuestionList);
