import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 100px;
`;
export const RulesButton = styled(Button)`
  background-color: #1c1c56;
  padding: 8px 50px;
  letter-spacing: 4px;
  color: white;
  font-size: 14px;
  border: 1px solid white;
  border-radius: 14px;
  color: white;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: #0a0e21;
  }
`;
