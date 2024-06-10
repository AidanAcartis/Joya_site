const filePath = path.join(__dirname, 'assets/data/products.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
    return;
  }
  try {
    const products = JSON.parse(data);
    console.log(products);
  } catch (parseError) {
    console.error('Erreur lors de l\'analyse du JSON:', parseError);
  }
});
