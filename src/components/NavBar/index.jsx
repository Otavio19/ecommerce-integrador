import "./style.css";
//Img
import photo from "../../assets/react.svg";
//Icons
import { BiChevronRight } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

//config
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar = ({ productCart }) => {
  const [products, setProducts] = useState([]);

  setProducts(JSON.parse(localStorage.getItem(productList)));
  return (
    <div className="navBar">
      <div className="containerNav">
        <input type="checkbox" name="" id="menuCheck" />
        <input type="checkbox" id="cartCheck" />
        <div className="iconNav">
          <img src={photo} alt="" />
        </div>
        <div className="listNav">
          <div className="openMenu">
            <label htmlFor="menuCheck">
              <BiMenu />
            </label>
          </div>
          <ul>
            <Link to="/" className="itemNav">
              <div className="itemIcon">
                <BiChevronRight />
              </div>
              <div className="itemText">Home</div>
            </Link>
            <Link to="/ProductPage" className="itemNav">
              <div className="itemIcon">
                <BiChevronRight />
              </div>
              <div className="itemText">Page</div>
            </Link>
          </ul>
        </div>
        <div className="cartBox">
          <div className="cartIcon">
            <label htmlFor="cartCheck">
              <BiCart />
            </label>
          </div>
          <div className="cartList">
            <ul>
              {products.map((product) => (
                <li>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
