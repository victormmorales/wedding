import styled from "styled-components";

export const HeroStyled = styled.div`
  background-image: url("/image/macayvictor-bn1.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  color: white;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-family: "Gowun Batang", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-top: 0px;
`;

export const HeroSubtitle = styled.h2`
  color: #fff;
  font-family: "Gowun Batang", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  margin-top: -5px;
  margin-bottom: 150px;
`;

// export const HeroStyled = styled.div`
//   background-image: url("/image/macayvictor.png");
//   background-size: cover;
//   background-position: center;
//   min-height: 100vh; /* Usa min-height en lugar de height */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   text-align: center;
//   color: white;
// `;

export const IntructionBackground = styled.div`
  height: 100vh;
  background-image: url("/image/bg-instrucciones.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow-y: auto;
  padding: 20px;
`;

export const IntructionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  text-align: center;
`;

export const IntructionSubtitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-align: center;
`;
