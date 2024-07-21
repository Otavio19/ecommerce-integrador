import React, { useEffect, useState } from "react";
import Globais from "../../utils/Globais";
import "./style.css";
import { PiUsbLight } from "react-icons/pi";
import Button from "../Button";

const MiniCart = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    setListProduct(Globais.productList);
    console.log("Lista: ", Globais.productList);
  }, [Globais.productList]);

  const removerProduct = (id) => {
    console.log("produto removido: ", id);
    const newList = listProduct.filter((produto) => produto.id !== id);
    setListProduct(newList);
    Globais.productList = newList;
  };

  return (
    <ul className="miniCart">
      {listProduct.length > 0 ? (
        <div className="miniCartList">
          {listProduct.map((product) => (
            <div>
              <li className="miniCartItem">
                {product.title} - {product.price}
                <Button
                  text="-"
                  event={() => {
                    removerProduct(product.id);
                  }}
                />
              </li>
              <hr />
            </div>
          ))}
          <Button text="Finalizar Comprar" />
        </div>
      ) : (
        <h1 className="msgNothing">Nenhum Produto No Carrinho :( </h1>
      )}
    </ul>
  );
};

export default MiniCart;
