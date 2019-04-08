import unionWith from 'lodash';
/**
 * Questions reducer, deals mostly with actions dispatched from sagas.
 */
export const answers = (state = [], {
    type,
    answers
}) => {
    /**
     * Question Equality returns true if two questions are equal, based on a weak check of their question_id property
     * @param a
     * The first question
     * @param b
     * The second question
     * @returns {boolean}
     * Whether the questions are equal
     */
    const answerEquality = (a = {}, b = {}) => {
        return a.answer_id == b.answer_id
    };

    /**
     * Create a new state by combining the existing state with the question(s) that has been newly fetched
     */

    if (type === `FETCHED_ANSWERS`) {
        state = answers
    }
    return state;
};