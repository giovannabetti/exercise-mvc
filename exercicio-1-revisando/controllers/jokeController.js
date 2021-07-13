const jokeModel = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJoke();
  console.log(joke);
  return res.render('jokeView.ejs', { joke });
};

module.exports = { listJokes };
