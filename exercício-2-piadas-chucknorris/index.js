const express = require('express');
const { getCategories, redirectToCategories } = require('./controllers/categorias');
const { randomJoke, jokeByCategory } = require('./controllers/jokesController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/jokes', randomJoke);
app.get('/jokes/:category', jokeByCategory);

app.get('/categories', getCategories);
app.get('/', redirectToCategories);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listen to port ${PORT}`));
