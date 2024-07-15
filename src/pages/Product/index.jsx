import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";

const Product = () => {
  const { id_product } = useParams();
  const [product, setProduct] = useState();
  console.log("id selecionado:", id_product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3333/product/${id_product}`
        );
        if (!response.ok) {
          throw new Error("Erro ao realizar a consulta.");
        }
        const data = await response.json();
        setProduct(data);
        console.log("Produto Encontrado: ", data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      {product ? (
        <>
          <div className="productPageBox">
            <img src={product.img} alt="" className="imgProductPage" />
            <div className="infoProductBox">
              <h1>{product.name}</h1>
              <p className="categoryProductPage">{product.category}</p>
              <p className="priceProductPage">R${product.price}</p>
              <hr />
              <button className="btnBuy">Comprar</button>
            </div>
          </div>
          <div className="descriptionProductPage">
            <p className="descriptionTitle">Descrição:</p>
            {product.description}
          </div>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
};

export default Product;
