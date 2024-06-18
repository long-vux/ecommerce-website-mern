import { WrapperInputStyle } from "./style";
import React, { useState } from "react";

const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder, ...rests } = props;
  return (
    <WrapperInputStyle
      placeholder={placeholder}
      valueInput={valueInput}
      {...rests}
    ></WrapperInputStyle>
  );
};

export default InputForm;
