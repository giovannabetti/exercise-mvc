const axios = require('axios');

const getCategories = async () => (await axios.get('https://api.chucknorris.io/jokes/categories')).data;

module.exports = { getCategories };
