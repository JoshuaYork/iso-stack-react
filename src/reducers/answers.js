import unionWith from 'lodash/unionWith';

export const answers = (state = [], {
    type,
    answer,
    answers
}) => {
    /**
     * Answer Equality returns true if two answers are equal, based on a weak check of their answer_id property
     * @param a
     * The first answer
     * @param b
     * The second answer
     * @returns {boolean}
     * Whether the answer are equal
     */
    const answerEquality = (a = {}, b = {}) => {
        return a.answer_id == b.answer_id
    };
    /**
     * Create a new state by combining the existing state with the question(s) that has been newly fetched
     */
    if (type === `FETCHED_ANSWER`) {
        state = unionWith([answer], state, answerEquality);
    }

    return state;
}