import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 15px 100px;
  background-color: rgb(26, 148, 255);
`;

export const HeaderText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  margin-left: 10px;
`;
