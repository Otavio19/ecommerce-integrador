import "./style.css";

//Components
import Button from "../Button";

//Icons
import { BiSolidCartAdd } from "react-icons/bi";
import { BiSolidBasket } from "react-icons/bi";

const Card = ({ productTitle, productValue, productImage }) => {
  const saveProduct = (product) => {
    localStorage.setItem("productList", JSON.stringify(product));
  };
  return (
    <div className="cardContainer">
      <img src={productImage} alt="" />
      <h2>{productTitle}</h2>
      <p>${productValue}</p>
      <div className="btnBox">
        <Button icon={<BiSolidBasket />} text="Ver" />
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
