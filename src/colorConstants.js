export const paperBorderColor = "#2a2ab1";
export const rockBorderColor = "#cf0a0a";
export const scissorBorderColor = "#387e5b";

export const getBorderColor = (selected) => {
  if (selected === "rock") return rockBorderColor;
  if (selected === "paper") return paperBorderColor;
  return scissorBorderColor;
};
