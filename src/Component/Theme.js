import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  background: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
