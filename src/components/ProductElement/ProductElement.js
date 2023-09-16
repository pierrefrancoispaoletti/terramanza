import React from "react";
import AdminButtonBar from "../AdminButtonBar/AdminButtonBar";
import { TableauContent } from "../TableauHomePage/tableau-homepage.style";
import { selectCurrentUser } from "../../redux/reducers/User/selector";
import { useSelector } from "react-redux";
import WineElement from "../WineElement/WineElement";
import TranslatorComponent from "../TranslatorComponent/TranslatorComponent";

const ProductElement = ({ product, index, length }) => {
  const { _id, price, description, title, visible, category, couleur } =
    product;
  const user = useSelector(selectCurrentUser);
  return (
    <TableauContent
      visible={user?.role === "isAdmin" || visible}
      category={category}
      last={index === length - 1}
    >
      {user && user.role === "isAdmin" && (
        <AdminButtonBar _id={_id} product={product} />
      )}
      <h3 className="title">
        <span>{`${visible ? "" : "CACHÉ : "} ${title}`}</span>
        {category !== "le-vin" || couleur.every((color) => !color.isChecked) ? (
          <span className="price">{price?.toFixed(2)} €</span>
        ) : (
          <WineElement couleur={couleur} />
        )}
      </h3>
      {/* <WineColorContainer>
        {couleur.map(
          (color) =>
            color.isChecked && (
              <WineItemElement key={color.value} color={color.value}>
                <FontAwesomeIcon icon={faWineBottle} size="2x" />
              </WineItemElement>
            )
        )}
      </WineColorContainer> */}
      <p className="description">
        {description.length > 0 && (
          <TranslatorComponent>
            {description.replace("\n", " ")}
          </TranslatorComponent>
        )}
      </p>
    </TableauContent>
  );
};

export default ProductElement;
