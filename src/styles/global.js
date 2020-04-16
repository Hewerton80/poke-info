import { createGlobalStyle } from "styled-components";
import fontPressStart from '../styles/fonts/PressStart2P-Regular.ttf';
import pokemonHallow from '../styles/fonts/Pokemon-Hollow.ttf';
//import pokemonSolid from '../styles/fonts/Pokemon-Solid.ttf';

export default createGlobalStyle`
  @font-face{
      src: url(${pokemonHallow});
      font-family: 'pokemon-hallow';    
      
  }
  @font-face{
      src: url(${pokemonHallow});
      font-family: 'pokemon-solid';    
      
  }
  @font-face{
      src: url(${fontPressStart});
      font-family: 'Press Start 2P';    
      font-weight: normal;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus  {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 14px;
    font-family:Arial, Helvetica, sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button, a{
    cursor: pointer;
  }
`;
