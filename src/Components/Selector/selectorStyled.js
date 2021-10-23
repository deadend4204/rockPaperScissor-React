import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const ChoiceContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const OptionCircle = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const OptionContainer = styled(IconButton)`
  padding: 20px;
  background-color: #4bddf5;
  border: 15px solid
    ${(props) => (props.bordercolor ? props.bordercolor : "blue")};
  border-radius: 50%;
  &:hover {
    background-color: white;
  }
  @media (max-width: 800px) {
    padding: 10px;
  }
  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) =>
    props.bottom &&
    `bottom: ${props.bottom}; transform: translate(-50%, -50%);`}
`;

export const CenterContainer = styled.div`
  display: grid;
  place-items: center;
`;
