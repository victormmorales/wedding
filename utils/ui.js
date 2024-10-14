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
  padding-top: 150px;
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
  /* margin-bottom: 150px; */
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
  /* background-color: #f6f6ec; */
  background-color: ${(props) => props.background};
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
  /* gap: 20px; */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;
export const CarrouselContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  min-height: 30vh;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
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
  padding-bottom: 70px;
  min-height: 50vh;
`;

export const UbicacionTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  flex-direction: row;
`;

export const UbicacionContainer = styled.div`
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 72px 20px 0;
  border-right: 1px solid #6b6b6b;
`;

export const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 20px 72px;
`;

export const ButtonStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;

export const ButtonContainer = styled.div`
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    /* min-height: 50vh; */
    padding: 10px;
  }
`;

export const ButtonRedirect = styled.div`
  width: 50%;
  background: ${(props) => (props.background ? props.background : "#fff")};
  padding: 0 8px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const VideoContainer = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "center";
  height: "100vh";
  width: "100%";
`;

export const HistoryStyled = styled.div`
  background-image: url("/image/macayvictor-bn2.jpg");
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
  padding: 0 100px;
`;

export const HistorySubtitle = styled.h2`
  color: #fff;
  /* font-family: "Gowun Batang", sans-serif; */
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-size: 1.5;
  text-align: center;
  margin-top: -5px;
  /* margin-bottom: 150px; */
`;

export const PicturaWallpaper = styled.div`
  background-image: ${(props) => `url(${props.url})`};
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

export const ButtonSpotify = styled.button`
  background: #1db954;
  max-height: 5vh;
  max-width: 50%;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: none;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  :hover {
    background: #67e393;
  }

  a {
    img {
      max-height: 5vh;
      max-width: 60%;
    }
  }
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
