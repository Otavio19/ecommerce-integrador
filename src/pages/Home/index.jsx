import "./style.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../../components/CardList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productsEcommerce, setProductsEcommerce] = useState();

  const company = useParams();
  useEffect(() => {
    fetch(
      `http://localhost:3333/category/ecommerce/be900914-2cbe-4958-aaeb-03b2301555d5`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setProductsEcommerce(data));

    fetch(`http://localhost:3333/product/company/${company.company}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
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
