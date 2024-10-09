import { useState, useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import {
  Modal,
  List,
  TaskBar,
  Button,
  ThemeProvider,
  GlobalStyle,
} from "@react95/core";
import {
  Drvspace7,
  Issue,
  Mmsys112,
  Winpopup1,
  Wab321019,
  User5,
  Write1,
} from "@react95/icons";
import { useInView } from "react-intersection-observer";
import {} from "../utils/image";
import { TASKBAR_HEIGHT } from "../utils/constants";
import { isMobileDevice } from "../utils/mobile";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import DesktopIcons from "../components/desktopIcons";
import Wallpaper from "../components/wallpaper";
import { InsideModal, InstructionModal } from "../components/insideModal";
import { Spotify } from "../components/folders/spotify";
import { AboutUS } from "../components/folders/aboutus";
import { Info } from "../components/folders/info";
import {
  ButtonContainer,
  ButtonRedirect,
  ButtonStyled,
  CiezaContainer,
  CiezaText,
  CiezaWallpaper,
  CityContainer,
  CuentaAtrasContainer,
  DescriptionContainer,
  DescriptionSubtitle,
  HeroStyled,
  HeroSubtitle,
  HeroTitle,
  IntructionBackground,
  IntructionSubtitle,
  IntructionTitle,
  Separator,
  Text,
  Title,
  UbicacionContainer,
  UbicacionTitle,
} from "../utils/ui";
import LogoIcon from "../components/icons/logo";
import { right } from "@xstyled/styled-components";
import YouTube from "../components/youTube";
import InitialComponent from "../components/initialComponent";

export default function Home() {
  /* Spotify Modal */
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);

  const [isMobile, setIsMobile] = useState();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const refCasamiento = useRef(null);
  const overflowRef = useRef(null);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, [setIsMobile]);

  const handleOpenSpotifyModal = useCallback(() => {
    setShowSpotifyModal(true);
  }, []);
  const handleCloseSpotifyModal = useCallback(() => {
    setShowSpotifyModal(false);
  }, []);

  /* Casamento */
  const [showCasamentoModal, setShowCasamentoModal] = useState(true);

  useEffect(() => {
    if (refCasamiento.current != null)
      refCasamiento.current.parentElement.style.overflow = "auto";
  }, [refCasamiento.current, showCasamentoModal]);

  const handleOpenCasamentoModal = useCallback(() => {
    setShowCasamentoModal(true);
  }, []);

  const handleCloseCasamentoModal = useCallback(() => {
    setShowCasamentoModal(false);
  }, []);

  /* Sobre nosotros */
  const [showSobreNosModal, setShowSobreNosModal] = useState(false);

  useEffect(() => {
    if (overflowRef.current != null)
      overflowRef.current.parentElement.style.overflow = "auto";
  }, [overflowRef.current, showSobreNosModal]);

  const handleOpenSobreNosModal = useCallback(() => {
    setShowSobreNosModal(true);
  }, []);

  const handleCloseSobreNosModal = useCallback(() => {
    setShowSobreNosModal(false);
  }, []);

  /* Mas información */
  const [showInformacoesModal, setShowInformacoesModal] = useState(false);

  useEffect(() => {
    if (overflowRef.current != null)
      overflowRef.current.parentElement.style.overflow = "auto";
  }, [overflowRef.current, showInformacoesModal]);

  const handleOpenInformacoesModal = useCallback(() => {
    setShowInformacoesModal(true);
  }, []);

  const handleCloseInformacoesModal = useCallback(() => {
    setShowInformacoesModal(false);
  }, []);

  /* Padrinos */
  const [showPadrinhosModal, setShowPadrinhosModal] = useState(false);

  const handleOpenPadrinhosModal = useCallback(() => {
    setShowPadrinhosModal(true);
  }, []);

  const handleClosePadrinhosModal = useCallback(() => {
    setShowPadrinhosModal(false);
  }, []);

  const [showAlertYes, toggleShowAlertYes] = useState(false);
  const [showAlertNo, toggleShowAlertNo] = useState(false);

  const handleOpenAlert = () => {
    toggleShowAlertYes(true);
    toggleShowAlertNo(false);
  };
  const handleCloseAlert = () => toggleShowAlertYes(false);

  const handleOpenAlertNo = () => {
    toggleShowAlertNo(true);
    toggleShowAlertYes(false);
  };
  const handleCloseAlertNo = () => toggleShowAlertNo(false);

  /* Confirmação de casamento */
  const [showConfirmacaoModal, setShowConfirmacaoModal] = useState(false);

  const handleOpenConfirmacaoModal = useCallback(() => {
    setShowConfirmacaoModal(true);
  }, []);

  const handleCloseConfirmacaoModal = useCallback(() => {
    setShowConfirmacaoModal(false);
  }, []);

  /* Github */
  const openGithub = function () {
    window.open("https://github.com/henriquespecian/casamento-nextjs");
  };

  const share = async function () {
    const url = "https://henriquespecian.github.io/casamento-nextjs/";
    if (navigator.canShare && navigator.canShare({ url })) {
      await navigator.share({ url });
    }
  };

  const can = function () {
    const url = "https://henriquespecian.github.io/casamento-nextjs/";
    return navigator.canShare && navigator.canShare({ url });
  };

  const [canShare, setcanShare] = useState();

  useEffect(() => {
    setcanShare(can());
  }, [setcanShare]);

  return (
    <ThemeProvider theme={"millenium"}>
      <GlobalStyle />
      <Wallpaper />
      <DesktopIcons
        setShowCasamentoModal={setShowCasamentoModal}
        setShowPadrinhosModal={setShowPadrinhosModal}
      />

      <div>
        <Head>
          <title>Macarena y Víctor</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#8FB0A9"></meta>

          <meta property="og:title" content="Macarena y Víctor" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            itemprop="image"
            content="https://specicampos.com.br/image/Monica_HenriquepxArt.png"
          />
          <meta
            property="og:image:secure_url"
            itemprop="image"
            content="https://specicampos.com.br/Monica_HenriquepxArt.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:url" content="https://specicampos.com.br" />
          <meta property="og:description" content="Atención nos vamos casar!" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="specicampos.com.br" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />

          <meta property="twitter:title" content="Macarena y Víctor" />
          <meta property="twitter:type" content="website" />
          <meta
            property="twitter:image"
            itemprop="image"
            content="https://specicampos.com.br/image/Monica_HenriquepxArt.png"
          />
          <meta
            property="twitter:image:secure_url"
            itemprop="image"
            content="https://specicampos.com.br/Monica_HenriquepxArt.png"
          />
          <meta property="twitter:image:type" content="image/png" />
          <meta property="twitter:url" content="https://specicampos.com.br" />
          <meta
            property="twitter:description"
            content="Atención nos vamos casar!"
          />
          <meta property="twitter:locale" content="pt_BR" />
          <meta property="twitter:site_name" content="specicampos.com.br" />
          <meta property="twitter:image:width" content="800" />
          <meta property="twitter:image:height" content="600" />
        </Head>

        {/* Instrucciones */}
        {showCasamentoModal && (
          <Modal
            className={!isMobile ? "modal" : ""}
            title="Nos casamos!.exe"
            closeModal={handleCloseCasamentoModal}
            icon={<Drvspace7 variant="32x32_4" />}
            style={{
              ...(isMobile
                ? {
                    top: "3%",
                    left: "5%",
                    height: `calc(94% - ${TASKBAR_HEIGHT}px)`,
                    width: "90%",
                    margin: 0,
                  }
                : {}),
            }}
            menu={[
              {
                name: "Opciones",
                list: (
                  <List>
                    <List.Item onClick={handleCloseCasamentoModal}>
                      Cerrar
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <InstructionModal boxShadow="out" ref={refCasamiento}>
              <HeroStyled>
                <LogoIcon color={"#fff"} />
                <HeroTitle>Macarena & Víctor</HeroTitle>
                <HeroSubtitle>03.05.25</HeroSubtitle>
              </HeroStyled>
              <InitialComponent isMobile={isMobile} isClient={isClient} />

              <ButtonStyled>
                <ButtonContainer background="#f6f6ec">
                  <ButtonRedirect
                    background="#6b6b6b"
                    onClick={handleOpenSobreNosModal}
                  >
                    <Text>Nuestra historia</Text>
                  </ButtonRedirect>
                  <Text color="#6b6b6b">
                    Para conocer nuestra historia mejor 🧡
                  </Text>
                </ButtonContainer>

                <ButtonContainer background="#dd9476">
                  <ButtonRedirect onClick={handleOpenSpotifyModal}>
                    <Text color="#6b6b6b">Playlist</Text>
                  </ButtonRedirect>
                  <Text color="#f6f6ec">
                    Por si te apetece meter algo de música para el día del
                    evento 😏
                  </Text>
                </ButtonContainer>

                <ButtonContainer background="#6b6b6b">
                  <ButtonRedirect>
                    <Text color="#6b6b6b">Dress code</Text>
                  </ButtonRedirect>
                  <Text color="#f6f6ec">
                    👗 ¡Lo guapos que vamos a ir todos! 👔
                  </Text>
                </ButtonContainer>

                <ButtonContainer>
                  <ButtonRedirect background="#dd9476">
                    <Text color="#f6f6ec">Sitios de interes</Text>
                  </ButtonRedirect>
                  <Text color="#6b6b6b">
                    Algunos sitios chulos para visitar 😎
                  </Text>
                </ButtonContainer>
              </ButtonStyled>
            </InstructionModal>
          </Modal>
        )}

        {/* Spotify  */}
        {showSpotifyModal && (
          <Modal
            title="Playlist FAV 🧡.exe"
            className="modal-spotify"
            icon={<Mmsys112 variant="32x32_4" />}
            closeModal={handleCloseSpotifyModal}
            menu={[
              {
                name: "Opciones",
                list: (
                  <List>
                    <List.Item onClick={handleCloseSpotifyModal}>
                      Cerrar
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <Spotify />
          </Modal>
        )}

        {/* Padrinos */}
        {showPadrinhosModal && (
          <Modal
            title="Readme.txt"
            icon={<Winpopup1 variant="32x32_4" />}
            closeModal={handleClosePadrinhosModal}
            className="modal-padrinho"
            menu={[
              {
                name: "Opciones",
                list: (
                  <List>
                    <List.Item onClick={handleClosePadrinhosModal}>
                      Cerrar
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <InsideModal>
              <p>
                ¡Hola a todos!Siempre que nos vemos, surgen charlas geniales
                sobre la vida y el amor. Ahora, ¡llegó nuestro gran día y
                queremos celebrarlo a lo grande con ustedes! Nos encantaría que
                estuvieran con nosotros para hacer de este momento algo aún más
                especial. ¿Se apuntan a la fiesta de nuestra boda?
              </p>
              <br />
              <img
                width={50}
                height={50}
                src={"/image/heart.gif"}
                className="heart"
              />
              <h1>¡Esperamos veros a todos!</h1>
              <img
                width={50}
                height={50}
                src={"/image/heart.gif"}
                className="heart"
              />
            </InsideModal>
            <div className="enviarCancelar">
              <Button className="botoes" onClick={handleOpenAlert}>
                Siiii 🥳
              </Button>
              {showAlertYes && (
                <Modal
                  closeModal={handleCloseAlert}
                  height="120"
                  hasWindowButton={false}
                  className="modal-baleia"
                  title="¡Tú sí que molas!"
                >
                  <img
                    width={200}
                    height={200}
                    src={"/image/roma-si.gif"}
                    className="baleia"
                  />
                </Modal>
              )}
              <Button className="botoes" onClick={handleOpenAlertNo}>
                No, soy lo peor.. 👎🏻
              </Button>
              {showAlertNo && (
                <Modal
                  closeModal={handleCloseAlertNo}
                  height="120"
                  hasWindowButton={false}
                  className="modal-baleia"
                  title="Llevas razón, eres lo peor..."
                >
                  <img
                    width={200}
                    height={200}
                    src={"/image/roma-no.gif"}
                    className="baleia"
                  />
                </Modal>
              )}
            </div>
          </Modal>
        )}

        {/* Nuestra historia  */}
        {showSobreNosModal && (
          <Modal
            className={!isMobile ? "modal" : ""}
            title="Nuestra historia"
            closeModal={handleCloseSobreNosModal}
            icon={<Wab321019 variant="32x32_4" />}
            style={{
              ...(isMobile
                ? {
                    top: "3%",
                    left: "5%",
                    height: `calc(94% - ${TASKBAR_HEIGHT}px)`,
                    width: "90%",
                    margin: 0,
                  }
                : {}),
            }}
            menu={[
              {
                name: "Opciones",
                list: (
                  <List>
                    <List.Item onClick={handleCloseSobreNosModal}>
                      Cerrar
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <AboutUS overflowRef={overflowRef} isMobile={isMobile} />
          </Modal>
        )}

        {/* Mais información */}
        {showInformacoesModal && (
          <Modal
            className={!isMobile ? "modal" : ""}
            title="Traje + Hospedagem"
            closeModal={handleCloseInformacoesModal}
            icon={<User5 variant="32x32_4" />}
            style={{
              ...(isMobile
                ? {
                    top: "3%",
                    left: "5%",
                    height: `calc(94% - ${TASKBAR_HEIGHT}px)`,
                    width: "90%",
                    margin: 0,
                  }
                : {}),
            }}
            menu={[
              {
                name: "Opciones",
                list: (
                  <List>
                    <List.Item onClick={handleCloseInformacoesModal}>
                      Cerrar
                    </List.Item>
                  </List>
                ),
              },
            ]}
          >
            <Info overflowRef={overflowRef} isMobile={isMobile} />
          </Modal>
        )}

        {/* Menu Iniciar  */}
        <TaskBar
          list={
            <List>
              <List.Item
                icon={<Drvspace7 variant="32x32_4" />}
                onClick={handleOpenCasamentoModal}
              >
                Nos casamos!
              </List.Item>
              <List.Item
                icon={<Mmsys112 variant="32x32_4" />}
                onClick={handleOpenSpotifyModal}
              >
                Playlist FAV
              </List.Item>
              <List.Item
                icon={<Wab321019 variant="32x32_4" />}
                onClick={handleOpenSobreNosModal}
              >
                Nuestra historia
              </List.Item>
              <List.Item
                icon={<Write1 variant="32x32_4" />}
                onClick={handleOpenInformacoesModal}
              >
                Dress code
              </List.Item>
              <List.Item
                icon={<User5 variant="32x32_4" />}
                onClick={handleOpenInformacoesModal}
              >
                Sitios de interés
              </List.Item>
              <List.Item
                icon={<Winpopup1 variant="32x32_4" />}
                onClick={handleOpenPadrinhosModal}
              >
                Vas a asistir?
              </List.Item>
              <List.Divider />
              <List.Item
                style={{ margin: "10px 0" }}
                // icon={<Issue variant="32x32_4" />}
                // onClick={openGithub}
              >
                Hecho con mucho 🧡
              </List.Item>
            </List>
          }
        />
      </div>
    </ThemeProvider>
  );
}
