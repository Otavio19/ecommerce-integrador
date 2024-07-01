import "./style.css";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const company = useParams();
  useEffect(() => {
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
        {products.map((product) => (
          <Card
            key={product.id}
            productTitle={product.name}
            productValue={product.price}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
