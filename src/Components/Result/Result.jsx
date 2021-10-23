import { Grid } from "@mui/material";
import React from "react";
import {
  BigOptionCircle,
  BigOptionContainer,
  DisplayText,
  PlayAgainButton,
  ResultBox,
  ResultContainer,
  ResultHolder,
  ResultText,
} from "./resultStyled";
import { useMediaQuery, useTheme } from "@mui/material";
import { getBorderColor } from "../../colorConstants";

const Result = ({
  resultText,
  userSelected,
  computerSelected,
  handlePlayAgain,
}) => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down(800));
  return (
    <Grid container justifyContent={"center"} gap={5}>
      <Grid item xs={8}>
        <ResultContainer>
          <ResultBox>
            <DisplayText>You Picked</DisplayText>
            <BigOptionContainer
              disabled
              bordercolor={getBorderColor(userSelected)}
            >
              <BigOptionCircle src={`/images/${userSelected}.svg`} />
            </BigOptionContainer>
          </ResultBox>
          {!mobileView && (
            <ResultHolder>
              <ResultText>{resultText}</ResultText>
              <PlayAgainButton onClick={handlePlayAgain}>
                Play again
              </PlayAgainButton>
            </ResultHolder>
          )}
          <ResultBox>
            <DisplayText>Computer Picked</DisplayText>
            <BigOptionContainer
              disabled
              bordercolor={getBorderColor(computerSelected)}
            >
              <BigOptionCircle src={`/images/${computerSelected}.svg`} />
            </BigOptionContainer>
          </ResultBox>
        </ResultContainer>
      </Grid>
      {mobileView && (
        <Grid item>
          <ResultHolder>
            <ResultText>{resultText}</ResultText>
            <PlayAgainButton onClick={handlePlayAgain}>
              Play again
            </PlayAgainButton>
          </ResultHolder>
        </Grid>
      )}
    </Grid>
  );
};

export default Result;
