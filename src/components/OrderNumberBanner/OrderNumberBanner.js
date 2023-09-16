import React from "react";
import { OrderBannerContainer } from "./order-number-banner.style";

const OrderNumberBanner = ({ top }) => {
  return (
    <div style={{ textDecoration: "none" }}>
      <OrderBannerContainer top={top}>
        <div>Bagelerie & Salad</div>
        <div>Chip's maison</div>
      </OrderBannerContainer>
    </div>
  );
};

export default OrderNumberBanner;
