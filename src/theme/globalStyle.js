import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  
    background-color: ${ ( { theme } ) => theme.background };
}
`;

export const LightTheme = {
  background: '#fafafa',
  header: '#ffffff',
  text: '#111517'
}

export const DarkTheme = {
  background: '#202c37',
  header: '#2b3945',
  text: '#fff'
}

// export default GlobalStyle;