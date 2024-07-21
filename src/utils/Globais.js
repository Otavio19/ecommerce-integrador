class Globais {
  static name = "Otávio";
  static productList = [];

  static addProduct(product) {
    productList.push(product);
    console.log("Lista: ", productList);
  }
}

export default Globais;
