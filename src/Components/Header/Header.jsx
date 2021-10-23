import { Grid } from "@mui/material";
import React from "react";
import {
  HeaderContainer,
  ScoreContainer,
  ScoreText,
  ScoreValueText,
} from "./headerStyled";
import { RulesButton } from "../styled";
const Header = ({ score, handleClickOpen }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <HeaderContainer>
          <img src="/images/logo.svg" height={100} alt="logo" />
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreValueText>{score}</ScoreValueText>
            <RulesButton onClick={handleClickOpen}>Rules</RulesButton>
          </ScoreContainer>
        </HeaderContainer>
      </Grid>
    </Grid>
  );
};

export default Header;
