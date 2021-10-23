import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import {
  paperBorderColor,
  rockBorderColor,
  scissorBorderColor,
} from "../../colorConstants";
import {
  CenterContainer,
  ChoiceContainer,
  OptionCircle,
  OptionContainer,
} from "./selectorStyled";

const Selector = ({ setUserSelected }) => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down(800));
  return (
    <CenterContainer>
      <ChoiceContainer>
        <img
          src="/images/triangle.svg"
          height={mobileView ? 250 : 300}
          alt="triangle"
        />
        <OptionContainer
          onClick={() => setUserSelected("rock")}
          position="absolute"
          top={"-15%"}
          right={"-10px"}
          bordercolor={rockBorderColor}
        >
          <OptionCircle src="/images/rock.svg" />
        </OptionContainer>
        <OptionContainer
          onClick={() => setUserSelected("scissors")}
          position="absolute"
          top={"-15%"}
          left={"-10px"}
          bordercolor={scissorBorderColor}
        >
          <OptionCircle src="/images/scissors.svg" />
        </OptionContainer>
        <OptionContainer
          onClick={() => setUserSelected("paper")}
          position="absolute"
          bottom={"-25%"}
          left={"50%"}
          bordercolor={paperBorderColor}
        >
          <OptionCircle src="/images/paper.svg" />
        </OptionContainer>
      </ChoiceContainer>
    </CenterContainer>
  );
};

export default Selector;
