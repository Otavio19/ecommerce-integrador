import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Card from "../../components/Card";

const CategoryPage = () => {
  const { id_category } = useParams();
  const [ecommerceProducts, setEcommerceProducts] = useState({
    category: {},
    products: [],
  });

  useEffect(() => {
    fetch(`http://localhost:3333/category/products/${id_category}`)
      .then((response) => response.json())
      .then((data) => {
        setEcommerceProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, [id_category]);

  return (
    <div className="homeContainer">
      <h1>{ecommerceProducts.category?.name}</h1>
      <section className="cardList">
        {ecommerceProducts.products?.map((product) => (
          <Card
            productTitle={product.name}
            productValue={product.price}
            productImage={product.img}
          />
        ))}
      </section>
    </div>
  );
};

export default CategoryPage;
