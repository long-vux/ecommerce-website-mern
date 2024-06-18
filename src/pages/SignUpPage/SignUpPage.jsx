import React from "react";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperContainerLeft, WrapperContainerRight } from "./style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import thumbnailLogo from "../../assets/images/thumbnail-logo.png";
import { Image } from "antd";
import { WrapperTextLight } from "./style";

const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ccc",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <h1>Đăng ký tài khoản</h1>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          <InputForm placeholder="password" style={{ marginBottom: "10px" }} />
          <InputForm placeholder="confirm password" />
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton="Đăng nhập"
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <p>
            <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          </p>
          <p>
            Đã có tài khoản?
            <WrapperTextLight>Đăng nhập</WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={thumbnailLogo}
            preview={false}
            alt="thumbnail-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại Longvu</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
