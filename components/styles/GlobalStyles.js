import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: 'Ubuntu', sans-serif;
}
${'' /* .section {
  margin: 0;
} */}
`;

export default GlobalStyles;
