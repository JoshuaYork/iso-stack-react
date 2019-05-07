/**
 * The stackexchange api key
 *
 */
const API_KEY = '3)vQIxQvPHLrC7xt)ZTLvQ((';
/**
 * The URL to receive a list of questions in JSON from StackOverflow.
 * Works if you paste it into your browser's URL bar.
 * Subject to eventual deprecation by its authors (Use mock data after that point)
 */
export const questions = `https://api.stackexchange.com/2.0/questions?site=stackoverflow&key=${API_KEY}`;
/**
 * The URL to receive details on a single question.
 * This request also returns the body of the question
 * @param id
 * The question ID to fetch
 */
export const question = id =>
  `https://api.stackexchange.com/2.0/questions/${id}?site=stackoverflow&filter=withbody&key=${API_KEY}`;

/**
 * The URL to receive a list of questions in JSON from StackOverflow with a given tag.
 * Works if you paste it into your browser's URL bar.
 * Subject to eventual deprecation by its authors (Use mock data after that point)
 * @param tag
 */
export const tagQuestions = tag =>
  `https://api.stackexchange.com/2.2/search/advanced?tagged=${tag}&site=stackoverflow&key=${API_KEY}`;

export const answers = question_id =>
  `https://api.stackexchange.com/2.2/questions/${question_id}/answers?site=stackoverflow&filter=withbody&key=${API_KEY}`;
