const axios = require('axios');

const getRandomJoke = async () => (await axios.get('https://api.chucknorris.io/jokes/random')).data.value;

const getJokeByCategory = async (category) => (
  await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)).data.value;

module.exports = { getRandomJoke, getJokeByCategory };
