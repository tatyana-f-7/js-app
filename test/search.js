function searchForProduct(productName) {
    if(productName.trim().length === 0) console.log('Product name is not provided');
    else console.log(`${productName} is searched!`);
  }
  
  console.log(searchForProduct('Book'));
  searchForProduct('');
  searchForProduct('    ');