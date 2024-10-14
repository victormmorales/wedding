import {
  CarrouselContainer,
  CiezaContainer,
  CiezaText,
  CiezaWallpaper,
  DescriptionContainer,
  DescriptionSubtitle,
  HeroTitle,
  HistoryStyled,
  HistorySubtitle,
  PicturaWallpaper,
  Separator,
  Text,
  Title,
} from "../../utils/ui";
import { InsideModal } from "../insideModal";
import YouTube from "../youTube";

export const AboutUS = ({ overflowRef, isMobile }) => {
  return (
    <InsideModal bg="white" boxShadow="out" ref={overflowRef}>
      <DescriptionContainer background="#f6f6ec">
        <Separator height="50px" />
        <Title color="#000">Nuestra historia</Title>
        <Text color="#6b6b6b">
          Dice una vieja leyenda oriental que hay personas destinadas a
          conocerse que están conectadas por un hilo rojo invisible, este hilo
          nunca desaparece y permanece constantemente atado a sus dedos, a pesar
          del tiempo y la distancia.
        </Text>
        <Text color="#6b6b6b">
          La leyenda dice que no importa lo que se tarde en conocer a esa
          persona, tampoco el tiempo que pases sin verla, ni siquiera importa si
          vives en la otra punta del mundo: el hilo se estirará hasta el
          infinito, pero nunca se romperá. Su dueño es el destino.
        </Text>
        <Separator height="50px" />
      </DescriptionContainer>

      <CiezaContainer>
        {isMobile ? (
          <img
            className="image-center"
            src={"/image/history-2020.jpg"}
            alt="historia 1"
          />
        ) : (
          <PicturaWallpaper url={"/image/history-2020.jpg"} />
        )}
        <CiezaText>
          <DescriptionSubtitle color="#000" style={{ fontWeight: 700 }}>
            2020
          </DescriptionSubtitle>
          <Text color="#6b6b6b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia nec dolor et feugiat. In dictum ante eget efficitur egestas.
            Nunc lacinia malesuada lectus. Nullam id facilisis leo. Phasellus
            pharetra lacus non lorem dictum, vel gravida mi facilisis. Mauris
            finibus, ligula ac maximus dapibus, massa neque interdum enim, a
            bibendum justo ligula eget lectus. 🦠
          </Text>
        </CiezaText>
      </CiezaContainer>

      <CiezaContainer>
        <CiezaText>
          <DescriptionSubtitle color="#000" style={{ fontWeight: 700 }}>
            2021
          </DescriptionSubtitle>
          <Text color="#6b6b6b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia nec dolor et feugiat. In dictum ante eget efficitur egestas.
            Nunc lacinia malesuada lectus. Nullam id facilisis leo. Phasellus
            pharetra lacus non lorem dictum, vel gravida mi facilisis. Mauris
            finibus, ligula ac maximus dapibus, massa neque interdum enim, a
            bibendum justo ligula eget lectus.
          </Text>
        </CiezaText>
        {isMobile ? (
          <img
            className="image-center"
            src={"/image/history-2021.jpg"}
            alt="historia 1"
          />
        ) : (
          <PicturaWallpaper url={"/image/history-2021.jpg"} />
        )}
      </CiezaContainer>

      <CiezaContainer>
        {isMobile ? (
          <img
            className="image-center"
            src={"/image/history-2022.jpg"}
            alt="historia 1"
          />
        ) : (
          <PicturaWallpaper url={"/image/history-2022.jpg"} />
        )}
        <CiezaText>
          <DescriptionSubtitle color="#000" style={{ fontWeight: 700 }}>
            2022
          </DescriptionSubtitle>
          <Text color="#6b6b6b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia nec dolor et feugiat. In dictum ante eget efficitur egestas.
            Nunc lacinia malesuada lectus. Nullam id facilisis leo. Phasellus
            pharetra lacus non lorem dictum, vel gravida mi facilisis. Mauris
            finibus, ligula ac maximus dapibus, massa neque interdum enim, a
            bibendum justo ligula eget lectus.
          </Text>
        </CiezaText>
      </CiezaContainer>

      <CiezaContainer>
        <CiezaText>
          <DescriptionSubtitle color="#000" style={{ fontWeight: 700 }}>
            2023
          </DescriptionSubtitle>
          <Text color="#6b6b6b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia nec dolor et feugiat. In dictum ante eget efficitur egestas.
            Nunc lacinia malesuada lectus. Nullam id facilisis leo. Phasellus
            pharetra lacus non lorem dictum, vel gravida mi facilisis. Mauris
            finibus, ligula ac maximus dapibus, massa neque interdum enim, a
            bibendum justo ligula eget lectus.
          </Text>
        </CiezaText>
        {isMobile ? (
          <img
            className="image-center"
            src={"/image/history-2023.jpg"}
            alt="historia 1"
          />
        ) : (
          <PicturaWallpaper url={"/image/history-2023.jpg"} />
        )}
      </CiezaContainer>

      <CiezaContainer>
        {isMobile ? (
          <img
            className="image-center"
            src={"/image/history-2024.jpg"}
            alt="historia 1"
          />
        ) : (
          <PicturaWallpaper url={"/image/history-2024.jpg"} />
        )}
        <CiezaText>
          <DescriptionSubtitle color="#000" style={{ fontWeight: 700 }}>
            2024
          </DescriptionSubtitle>
          <Text color="#6b6b6b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia nec dolor et feugiat. In dictum ante eget efficitur egestas.
            Nunc lacinia malesuada lectus. Nullam id facilisis leo. Phasellus
            pharetra lacus non lorem dictum, vel gravida mi facilisis. Mauris
            finibus, ligula ac maximus dapibus, massa neque interdum enim, a
            bibendum justo ligula eget lectus.
          </Text>
        </CiezaText>
      </CiezaContainer>

      {/* {!isMobile && (
        <>
        </>
      )} */}
      <Separator height="50px" />
      <Title color="#6b6b6b">y muchos momentos más...</Title>
      <Separator height="20px" />
      <CarrouselContainer>
        {/* <div style={{ background: "#dd9476" }}></div> */}
        <PicturaWallpaper url={"/image/carrousel-1.jpg"} />
        <PicturaWallpaper url={"/image/carrousel-2.JPG"} />
        <PicturaWallpaper url={"/image/photo-2021.jpg"} />
        <PicturaWallpaper url={"/image/carrousel-3.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-5.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-6.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-8.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-7.JPG"} />
        {/* <div style={{ background: "#6b6b6b" }}></div> */}

        <PicturaWallpaper url={"/image/carrousel-10.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-16.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-9.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-11.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-12.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-13.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-14.JPG"} />
        <PicturaWallpaper url={"/image/carrousel-15.JPG"} />
        {/* <div style={{ background: "#f6f6ec" }}></div> */}
      </CarrouselContainer>

      <YouTube background={"#dd9476"} text />
    </InsideModal>
  );
};
