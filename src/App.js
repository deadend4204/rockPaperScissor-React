import { Container, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Result from "./Components/Result/Result";
import RulesModal from "./Components/RulesModal/RulesModal";
import Selector from "./Components/Selector/Selector";

const availableChoices = ["rock", "scissors", "paper"];

function App() {
  const [score, setScore] = useState(0);
  const [userSelected, setUserSelected] = useState("");
  const [computerSelected, setComputerSelected] = useState("");
  const [resultText, setResultText] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"],
    },
  });

  const handlePlayAgain = () => {
    setResultText("");
    setUserSelected("");
    setComputerSelected("");
  };

  useEffect(() => {
    if (!userSelected) {
      return;
    }
    setComputerSelected(
      availableChoices[Math.floor(Math.random() * availableChoices.length)]
    );
  }, [userSelected]);

  useEffect(() => {
    if (!computerSelected) {
      return;
    }
    if (computerSelected === userSelected) {
      setResultText("Tie !");
      setScore((prevScore) => prevScore + 2);
      return;
    }
    if (
      (computerSelected === "rock" && userSelected === "paper") ||
      (computerSelected === "paper" && userSelected === "scissors") ||
      (computerSelected === "scissors" && userSelected === "rock")
    ) {
      setResultText("You win");
      setScore((prevScore) => prevScore + 10);
      return;
    }
    setResultText("You lose");
    setScore((prevScore) => prevScore - 10);
  }, [computerSelected, userSelected]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header score={score} handleClickOpen={handleClickOpen} />
        {!userSelected && <Selector setUserSelected={setUserSelected} />}
        {resultText && (
          <Result
            resultText={resultText}
            computerSelected={computerSelected}
            userSelected={userSelected}
            handlePlayAgain={handlePlayAgain}
          />
        )}
        <RulesModal open={open} handleClose={handleClose} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
