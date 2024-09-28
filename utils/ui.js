import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  color: #f3f3e5;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  /* font-family: "Gowun Batang", sans-serif; */
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 0px;
`;

export const HeroSubtitle = styled.h2`
  color: #fff;
  /* font-family: "Gowun Batang", sans-serif; */
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  margin-top: -5px;
  margin-bottom: 150px;
`;

export const Separator = styled.div`
  height: ${(props) => props.height};
  width: 100%;
`;

export const Title = styled.h1`
  color: ${(props) => props.color};
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-top: 0px;
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 8px;
`;

/* dd9476 */
export const DescriptionContainer = styled.div`
  background-color: #f6f6ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  color: #000;
  padding: 50px 100px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const DescriptionSubtitle = styled.h2`
  color: ${(props) => props.color};
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 8px;
`;

export const CuentaAtrasContainer = styled.div`
  background-color: #dd9476;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const CiezaContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

export const CiezaWallpaper = styled.div`
  background-image: url("/image/cieza2.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`;

export const CiezaText = styled.div`
  padding: 100px 50px;
`;

// OLD ---------------------------------------------------
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
