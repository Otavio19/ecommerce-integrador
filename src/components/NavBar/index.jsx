import "./style.css";
//Img
import photo from "../../assets/react.svg";
//Icons
import { BiChevronRight } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

//config
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const NavBar = ({ productCart }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:3333/category/ecommerce/be900914-2cbe-4958-aaeb-03b2301555d5"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    fetch(
      "http://localhost:3333/category/company/be900914-2cbe-4958-aaeb-03b2301555d5"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar as categorias.");
        }
        return response.json();
      })
      .then((data) => {
        setCategory(data);
        console.log(data);
      });
  }, []);

  //setProducts(JSON.parse(localStorage.getItem("productList")));
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
            {category.map((category) =>
              category.ecommerce == true ? (
                <Link
                  to={`/${category.id}`}
                  className="itemNav"
                  key={category.id}
                >
                  <div className="itemIcon">
                    <BiChevronRight />
                  </div>
                  <div className="itemText">{category.name}</div>
                </Link>
              ) : (
                ""
              )
            )}
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
              <li>Produto 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
