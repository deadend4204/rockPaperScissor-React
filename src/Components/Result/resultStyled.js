import styled from "@emotion/styled";
import { Button, IconButton, Typography } from "@mui/material";

export const DisplayText = styled(Typography)`
  font-size: 20px;
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media (max-width: 800px) {
    font-size: 15px;
    text-align: center;
  }
`;
export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const BigOptionCircle = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`;

export const BigOptionContainer = styled(IconButton)`
  padding: 40px;
  background-color: #4bddf5;
  border: 30px solid
    ${(props) => (props.bordercolor ? props.bordercolor : "blue")};
  border-radius: 50%;
  &:hover,
  &:disabled {
    background-color: white;
  }
  @media (max-width: 800px) {
    padding: 15px;
    border: 10px solid
      ${(props) => (props.bordercolor ? props.bordercolor : "blue")};
  }
`;

export const PlayAgainButton = styled(Button)`
  background-color: white;
  padding: 8px 50px;
  letter-spacing: 2px;
  font-weight: bold;
  &:hover {
    background-color: white;
  }
`;

export const ResultHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ResultText = styled(Typography)`
  font-size: 40px;
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
`;
