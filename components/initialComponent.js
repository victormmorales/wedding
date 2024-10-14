import {
  CiezaContainer,
  CiezaText,
  CiezaWallpaper,
  CuentaAtrasContainer,
  DescriptionContainer,
  DescriptionSubtitle,
  Separator,
  Text,
  Title,
} from "../utils/ui";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

export default function InitialComponent({ isMobile, isClient }) {
  return (
    <div>
      <DescriptionContainer background="#f6f6ec">
        <Separator height="50px" />
        <Title color="#000">¡Nos casamos!</Title>
        <Text color="#6b6b6b">
          Después de 5 años de noviazgo y una hija... 🐶 ¡Creemos que ha llegado
          el momento de dar el paso!
        </Text>
        <Text color="#6b6b6b">
          Contamos con cada uno de vosotros para celebrar este día y marcar el
          inicio de esta nueva etapa de nuestra vida. ¡El día promete estar
          lleno de buena comida, mucha bebida y sobretodo buen rollo para
          celebrarlo por todo lo alto!
        </Text>
        <Separator height="50px" />
      </DescriptionContainer>

      <CuentaAtrasContainer>
        <DescriptionSubtitle color="#fff">Sólo falta</DescriptionSubtitle>
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
          <img className="image-center" src={"/image/cieza.jpg"} alt="Cieza" />
        ) : (
          <CiezaWallpaper />
        )}
        <CiezaText>
          <DescriptionSubtitle color="#000" style={{ fontWeight: 700 }}>
            ¡Nos casamos en Cieza!
          </DescriptionSubtitle>
          <Text color="#6b6b6b">
            ¿Que no sabéis donde esta Cieza? Está en Murcia. Le llaman la perla
            del Segura. Se encuentra en un valle atreavesada por el río, rodeada
            de frutales, entre ellos el melocotonero (Por cierto tenéis que
            probar el melocotón de Cieza 🍑).
          </Text>
          <Text color="#6b6b6b">
            Es el pueblo de origen de Maca y el de Víctor por adopción... y como
            nos tratan muy bien hemos decidido que era el mejor sitio para
            celebrar nuestra boda.
          </Text>
          {/* <Text color="#000">
                    Téneis un motón de actividades que podéis realizar y que el
                    entorno permite: senderismo por su atalaya, hacer footing o
                    andar por el paseo ribereño y muchas más a cosas que os
                    vamos a contar 😉.
                  </Text> */}
        </CiezaText>
      </CiezaContainer>

      <DescriptionContainer background="#fff">
        {/* <UbicacionTitle>
                  <UbicacionContainer>
                    <Text color="#6b6b6b">MAYO</Text>
                    <Text color="#6b6b6b">03, 2025</Text>
                  </UbicacionContainer>
                  <CityContainer>
                    <Text color="#6b6b6b">CIEZA</Text>
                    <Text color="#6b6b6b">MURCIA</Text>
                  </CityContainer>
                </UbicacionTitle> */}
        <Separator height="20px" />
        <Text color="#6b6b6b">Horario de llegada - 13:00</Text>
        <Text color="#6b6b6b">Parroquia Ntra. Sra. de La Asunción. Cieza</Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.83498078433!2d-1.4299827241927086!3d38.23693638540377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd646c16e3c2585d%3A0x9a61cb2204caa679!2sParroquia%20Ntra.%20Sra.%20de%20La%20Asunci%C3%B3n.%20Cieza!5e0!3m2!1ses!2ses!4v1716379300966!5m2!1ses!2ses"
          width={isMobile ? "280" : "800"}
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Separator height="100px" />
        <Title color="#6b6b6b">Para saber un poquito más...</Title>
      </DescriptionContainer>
    </div>
  );
}
