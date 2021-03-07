import { createGlobalStyle } from "styled-components";
import device from "./device";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline; }
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block; }
body {
  line-height: 1; }
ol, ul {
  list-style: none; }
blockquote, q {
  quotes: none; }
blockquote {
  &:before, &:after {
    content: '';
    content: none; } }
q {
  &:before, &:after {
    content: '';
    content: none; } }
table {
  border-collapse: collapse;
  border-spacing: 0; }
  
a{
  text-decoration: none;
  color: inherit;
}
* {
  box-sizing: border-box;
}

body {
  width: 100%;
  min-height: 100vh;
  font-family: 'RedRose';
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-weight: lighter;
  padding: 1em 1em 0 1em;

  @media ${device.tablet}{
  padding: 1em 2em 0 2em;
  } 
}




/* h3 {
  font-weight: bold;
  font-size: 3.25rem;
  margin-bottom: 1em;
  text-align: start;
  width: 100%;

  @media ${device.tablet}{
    font-size: 10rem;
  } 
} */
`;
