import "./style.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../../components/CardList";
const Home = () => {
  const [productsEcommerce, setProductsEcommerce] = useState();

  const { id_company } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3333/category/ecommerce/${id_company}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setProductsEcommerce(data));
  }, []);
  return (
    <div className="homeContainer">
      <h1>Produtos</h1>
      <section className="productsBox">
        {productsEcommerce && productsEcommerce.length > 0 ? (
          productsEcommerce.map((product) => (
            <CardList category={product.name} products={product.products} />
          ))
        ) : (
          <p>Ainda não há produtos disponíveis.</p>
        )}
      </section>
    </div>
  );
};

export default Home;
