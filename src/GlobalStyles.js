import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Source Sans Pro", sans-serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
        }

        body {
          color: ${props => props.theme.primary};
          background: ${props => props.theme.background};
        }
`;

export default GlobalStyles;
