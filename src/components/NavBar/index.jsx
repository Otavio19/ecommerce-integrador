import "./style.css";
import Globais from "../../utils/Globais";
import MiniCart from "../MiniCart";

//Img
import photo from "../../assets/react.svg";

//Icons
import { BiChevronRight } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

//config
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NavBar = ({ productCart }) => {
  const { id_company } = useParams();
  const [category, setCategory] = useState([]);
  const idSession = localStorage.getItem("id_company");
  const [productList, setProductList] = useState(Globais.productList);
  const [checked, setChecked] = useState(false);
  if (!idSession) {
    localStorage.setItem("id_company", `${id_company}`);
  }

  useEffect(() => {
    fetch(`http://localhost:3333/category/company/${id_company}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar as categorias.");
        }
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      });
  }, []);

  useEffect(() => {
    setProductList(Globais.productList);
  }, [Globais.productList]);

  return (
    <div className="navBar">
      <div className="containerNav">
        <input type="checkbox" name="" id="menuCheck" />
        <input
          type="checkbox"
          id="cartCheck"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
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
            <Link to={`/${idSession}`} className="itemNav">
              <div className="itemIcon">
                <BiChevronRight />
              </div>
              <div className="itemText">Home</div>
            </Link>
            {category.map((category) =>
              category.ecommerce == true ? (
                <Link
                  to={`/CategoryPage/${category.id}`}
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
            {checked ? <MiniCart /> : <h1>Close</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
