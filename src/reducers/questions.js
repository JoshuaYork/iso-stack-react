import unionWith from 'lodash/unionWith';

/**
 * Questions reducer, deals mostly with actions dispatched from sagas.
 */
export const questions = (
  state = [],
  { type, question, questions, page, pagesize }
) => {
  /**
   * Question Equality returns true if two questions are equal, based on a weak check of their question_id property
   * @param a
   * The first question
   * @param b
   * The second question
   * @returns {boolean}
   * Whether the questions are equal
   */
  const questionEquality = (a = {}, b = {}) => {
    return a.question_id == b.question_id;
  };

  const questionsHaveTag = a => {
      return questions.filter(a);
  }

  /**
   * Create a new state by combining the existing state with the question(s) that has been newly fetched
   */
  if (type === `FETCHED_QUESTION`) {
    state = unionWith([question], state, questionEquality);
  }

  if (type === `FETCHED_QUESTIONS`) {
    state = unionWith(state, questions, questionEquality);
  }
  if (type == 'FETCHED_TAGGED_QUESTIONS') {
    
    state = { questions , page , pagesize};
  }
  if (type === `FETCHED_QUESTIONS_PAGED`) {
    state = unionWith(state, questions, questionEquality, page, pagesize);
  }
  return state;
};
