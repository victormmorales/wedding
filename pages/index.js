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
  CiezaContainer,
  CiezaText,
  CiezaWallpaper,
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
} from "../utils/ui";
import LogoIcon from "../components/icons/logo";

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

              <DescriptionContainer>
                <Separator height="50px" />
                <Title color="#000">¡Nos casamos!</Title>
                <Text color="#000">
                  Después de 5 años de noviazgo y una hija... 🐶 ¡Creemos que ha
                  llegado el momento de dar el paso!
                </Text>
                <Text color="#000">
                  Contamos con cada uno de vosotros para celebrar este día y
                  marcar el inicio de esta nueva etapa de nuestra vida. ¡El día
                  promete estar lleno de buena comida, mucha bebida y sobretodo
                  buen rollo para celebrarlo por todo lo alto!
                </Text>
                <Separator height="50px" />
              </DescriptionContainer>

              <CuentaAtrasContainer>
                <DescriptionSubtitle color="#fff">
                  Sólo falta
                </DescriptionSubtitle>
                <Separator height="30px" />
                {isClient && (
                  <FlipClockCountdown
                    to={"2025-05-03T13:30:00.635Z"}
                    labels={["DIAS", "HORAS", "MINUTOS", "SEGUNDOS"]}
                    className="flip-clock"
                  />
                )}
                <Separator height="30px" />
              </CuentaAtrasContainer>

              <CiezaContainer>
                {isMobile ? (
                  <img
                    className="image-center"
                    src={"/image/cieza.jpg"}
                    alt="Cieza"
                  />
                ) : (
                  <CiezaWallpaper />
                )}
                <CiezaText>
                  <DescriptionSubtitle color="#000">
                    ¡Nos casamos en Cieza!
                  </DescriptionSubtitle>
                  <Text color="#000">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean tincidunt eu ipsum quis ultrices. Phasellus ac
                    placerat leo. Nam eu turpis nec augue viverra varius sit
                    amet vel leo. Etiam vel vulputate arcu. Sed in dapibus
                    magna. Cras laoreet lectus vel ligula vehicula congue. Nulla
                    tempus lacus sapien, a cursus justo pretium quis.
                  </Text>
                </CiezaText>
              </CiezaContainer>

              <div>
                <IntructionSubtitle>Lugar y horario</IntructionSubtitle>
                <p>Horario de llegada - 13:00</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.83498078433!2d-1.4299827241927086!3d38.23693638540377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd646c16e3c2585d%3A0x9a61cb2204caa679!2sParroquia%20Ntra.%20Sra.%20de%20La%20Asunci%C3%B3n.%20Cieza!5e0!3m2!1ses!2ses!4v1716379300966!5m2!1ses!2ses"
                  width={isMobile ? "210" : "400"}
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p>Parroquia Ntra. Sra. de La Asunción. Cieza</p>
                <br />
                <br />
              </div>

              {/* OLD SECTION */}
              <IntructionBackground>
                <LogoIcon color={"#000"} />
                {/* Titulo */}
                <IntructionTitle>Macarena & Víctor</IntructionTitle>
                <IntructionSubtitle>
                  Cieza. 03 Mayo 2025 - 13:30
                </IntructionSubtitle>
                <div className="hero"></div>
                <br />
                <br />
                <img
                  className="image-center"
                  src={"/image/macayvictor.png"}
                  alt="Maca y Víctor"
                />
                <br />
                <IntructionSubtitle>Sólo falta:</IntructionSubtitle>
                {isClient && (
                  <FlipClockCountdown
                    to={"2025-05-03T13:30:00.635Z"}
                    labels={["DIAS", "HORAS", "MINUTOS", "SEGUNDOS"]}
                    className="flip-clock"
                  />
                )}
                <br />
                <br />
                <IntructionSubtitle>Lugar y horario</IntructionSubtitle>
                <p>Horario de llegada - 13:00</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.83498078433!2d-1.4299827241927086!3d38.23693638540377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd646c16e3c2585d%3A0x9a61cb2204caa679!2sParroquia%20Ntra.%20Sra.%20de%20La%20Asunci%C3%B3n.%20Cieza!5e0!3m2!1ses!2ses!4v1716379300966!5m2!1ses!2ses"
                  width={isMobile ? "210" : "400"}
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p>Parroquia Ntra. Sra. de La Asunción. Cieza</p>
                <br />
                <br />
                {/* <IntructionSubtitle>Lista de Presentes</IntructionSubtitle> */}
                {/* <p>
                  Temos duas formas de enviar presente, uma é a lista de
                  presente que é só clicar no ícone abaixo para ter acesso e a
                  outra é enviar um PIX com uma mensagem bem legal pra gente
                </p> */}
                <br />
                <br />
                {/* <p>
                  <a
                    href="https://noivos.casar.com/specicampos#/presentes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icons"
                      src={"/image/gift.png"}
                      alt="Lista de presente"
                    />
                    Lista de presentes do casar.com
                  </a>
                </p> */}
                <br />
                <br />
                {/* <a href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q">
                  <img
                    className="image-center"
                    src={"/image/qrcode-pix.png"}
                    alt="QrCode do Pix"
                    href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  Clique aqui
                </a> */}
                {/* <p>Chave-pix: 97241cba-c833-4fae-bab8-dc2860245083</p> */}
                <br />
                <br />
                <p>¿Dudas sobre el dresscode?</p>
                <img
                  className="icons"
                  src={"/image/megaphone.png"}
                  alt="Prestenção"
                  onClick={handleOpenInformacoesModal}
                />
                {/* <div>
                  <br />
                  <br />
                  <h2>Compartilhe!</h2>
                  <a onClick={share}>
                    <img
                      className="heart"
                      src={"/image/whatsapp_pixel.png"}
                      alt="ZAP"
                    />
                  </a>
                </div> */}

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>holi</p>
              </IntructionBackground>
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

        {/* Sobre nosotros  */}
        {showSobreNosModal && (
          <Modal
            className={!isMobile ? "modal" : ""}
            title="Sobre nosotros"
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
            <AboutUS overflowRef={overflowRef} />
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
                Sobre nosotros
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
