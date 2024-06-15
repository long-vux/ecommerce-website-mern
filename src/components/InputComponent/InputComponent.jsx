import React from "react";
import Input from "antd/es/input/Input";

const InputComponent = ({ size, placeholder, style, ...rests }) => {
  return (
    <Input size={size} placeholder={placeholder} style={style} {...rests} />
  );
};

export default InputComponent;
