import "./style.css";
import Card from "../Card";

const CardList = ({ category, products }) => {
  return (
    <div className="sectionBox">
      <h2 className="titleSection">{category}</h2>
      <div className="cardList">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Card
              productTitle={product.name}
              productValue={product.price}
              productImage={product.img}
            />
          ))
        ) : (
          <h1>Nenhum produto</h1>
        )}
      </div>
    </div>
  );
};

export default CardList;
