import React from "react";
import {
  WrapperCardStyle,
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 235 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: -1,
          left: -1,
          borderTopLeftRadius: "3px",
        }}
        alt="logo"
      />
      <StyleNameProduct>Apple Iphone 13</StyleNameProduct>
      <WrapperReportText>
        <span>4.97 </span>
        <StarFilled style={{ fontSize: "10px", color: "blue" }} />
        <span>| Sold 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000d
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
