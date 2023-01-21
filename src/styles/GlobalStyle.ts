import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #f6f1e8;
  max-width: 1200px;
  padding: 2rem 2rem;
  margin: 0 auto;
  height: 100%;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: #333333;
}

html {
  height: 100%;
}


.animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 1s forwards;
}

@keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}
`;
