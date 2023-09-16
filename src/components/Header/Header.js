import React from "react";
import { Link } from "react-router-dom";
import ImageElement from "../ImageElement/ImageElement";
import Loginbutton from "../LoginButton/LoginButton";
import { HeaderContainer, HeaderTitle } from "./header.style";
import logo from "../../assets/images/logo.png";
import texte from "../../assets/images/texte-chez-josephine.png";
import { OrderBannerContainer } from "../OrderNumberBanner/order-number-banner.style";
import OrderNumberBanner from "../OrderNumberBanner/OrderNumberBanner";

const Header = ({ shop }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <ImageElement width="80px" image={logo} alt={"logo chez josephine"} />
      </Link>
      <Loginbutton />
    </HeaderContainer>
  );
};

export default Header;
