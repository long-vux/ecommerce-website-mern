import React from "react";
import { Col } from "antd";
import { WrapperHeader, HeaderText, WrapperHeaderAccount } from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6} style={{ alignItems: "center", display: "flex" }}>
          <HeaderText>MERN ECOMMERCE</HeaderText>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeHolder="Input search text"
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: "30px" }} />
            </div>
            <div>
              <span style={{ fontSize: "12px" }}>Đăng nhập/Đăng Ký</span>
              <div>
                <span>Tài khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
            <div>
              <ShoppingCartOutlined style={{ fontSize: "30px" }} />
              <span style={{ fontSize: "12px" }}>Giỏ hàng</span>
            </div>
          </WrapperHeaderAccount>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
