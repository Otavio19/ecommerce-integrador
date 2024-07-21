import "./style.css";
import Globais from "../../utils/Globais";
//Components
import Button from "../Button";

//Icons
import { BiSolidCartAdd } from "react-icons/bi";
import { BiSolidBasket } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ productTitle, productValue, productImage, url, productId }) => {
  const productObj = {
    id: productId,
    title: productTitle,
    price: productValue,
    img: productImage,
  };

  const saveProduct = () => {
    const list = Globais.productList;

    for (let produto of list) {
      if (produto.id === productObj.id) {
        console.log("Existe");
        return;
      }
    }

    console.log("Não Existe");

    Globais.productList.push(productObj);
    console.log("Lista atualizada: ", Globais.productList);
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
