import "./style.css";

//Components
import Button from "../Button";

//Icons
import { BiSolidCartAdd } from "react-icons/bi";
import { BiSolidBasket } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ productTitle, productValue, productImage, url }) => {
  const saveProduct = (product) => {
    const products = JSON.parse(localStorage.getItem("productList")) || [];

    products.push(product);

    localStorage.setItem("productList", JSON.stringify(products));
  };

  return (
    <div className="cardContainer">
      <img src={productImage} alt="" />
      <h2>{productTitle}</h2>
      <p>${productValue}</p>
      <div className="btnBox">
        <Link to={`/ProductPage/${url}`}>
          <Button icon={<BiSolidBasket />} text="Ver" />
        </Link>
        <Button
          icon={<BiSolidCartAdd />}
          text="Carrinho"
          event={() => saveProduct(productTitle)}
        />
      </div>
    </div>
  );
};

export default Card;
