import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  border: 1px solid #dcc7ef;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 100px;
  margin-top: 20px;
  gap: 80px;
  @media (max-width: 800px) {
    gap: 10px;
    flex-direction: column;
    width: fit-content;
    margin-bottom: 60px;
  }
`;

export const ScoreContainer = styled.div`
  background: #dcc7ef;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  gap: 5px;
  @media (max-width: 800px) {
    padding: 5px;
  }
`;

export const ScoreText = styled(Typography)`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: grey;
  text-align: center;
`;

export const ScoreValueText = styled(Typography)`
  font-size: 55px;
  font-weight: bold;
  line-height: 3rem;
  color: #4e034e;
  text-align: center;
`;
