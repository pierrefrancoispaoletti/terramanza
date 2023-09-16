import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  WinePriceContainer,
  WinePriceElement,
} from "../TableauHomePage/tableau-homepage.style";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../_const";

const WineElement = ({ couleur }) => {
  const getWineColor = (couleur) => {
    switch (couleur) {
      case "rouge":
        return "#742f37";
      case "blanc":
        return "#f1f285";
      case "rosé":
        return "#ffb9b9";
      default:
        return colors.ecriture;
    }
  };
  return (
    <WinePriceContainer>
      {couleur.map(
        (color) =>
          color?.isChecked && (
            <WinePriceElement
              className="price wineprice"
              key={color.value}
              color={color.value}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: getWineColor(color.value),
                  background: "grey",
                  margin: "5px",
                  border: "1px solid white",
                }}
              >
                <span>
                  <FontAwesomeIcon icon={faWineBottle} size="1x" /> :
                </span>
                <span>{Number(color.price).toFixed(2)} €</span>
              </div>
            </WinePriceElement>
          )
      )}
    </WinePriceContainer>
  );
};

export default WineElement;
