const express = require('express');
const { getCategories, redirectToCategories } = require('./controllers/categorias');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/categories', getCategories);
app.get('/', redirectToCategories);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listen to port ${PORT}`));
