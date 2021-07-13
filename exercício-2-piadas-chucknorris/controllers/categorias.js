const Categorie = require('../models/Categoria');

const getCategories = async () => {
  const categorias = await Categoria.getCategories();
  res.render('categories/index.js', { categories });
}

const redirectToCategories = (_req, res) => {
  res.redirect('/categories');
};

module.exports = {
  getCategories,
  redirectToCategories
};
