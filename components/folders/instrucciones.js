import React from "react";

export const Instrucciones = () => {
  return (
    <InstructionModal boxShadow="out" ref={ref}>
      <IntructionBackground>
        <img
          width={150}
          height={150}
          src={"/logo-boda.svg"}
          className="heart"
        />
        <IntructionTitle>MACARENA & VICTOR</IntructionTitle>
        <div className="hero">
          <img
            width={50}
            height={50}
            src={"/image/heart.gif"}
            className="heart"
          />
          <h1 className="titulo">Macarena y Víctor</h1>
          <img
            width={50}
            height={50}
            src={"/image/heart.gif"}
            className="heart"
          />
        </div>
        <br />
        <h2>Cieza. 03 Mayo 2025 - 13:30</h2>
        <br />
        <br />
        <img
          className="image-center"
          src={"/image/macayvictor.png"}
          alt="Maca y Víctor"
        />
        <br />
        <h2>Vamos nos casar!</h2>
        <p>
          Depois de 14 anos de amizade e 8 anos de namoro, chegou a hora de
          comemorarmos nosso casamento!
        </p>
        <br />
        <p>
          Contamos com cada um dos convidados para celebrar essa história e
          marcar o início dessa nossa nova fase. A noite promete ser repleta de
          comida boa, bons drinks e KARAOKÊ!!!
        </p>
        <p>
          Veja abaixo um pouco sobre nós, a nossa história, detalhes da festa e,
          o mais importante, a lista de presentes!
        </p>
        <br />
        <br />
        <h2>Sólo falta:</h2>
        {isClient && (
          <FlipClockCountdown
            to={"2025-05-03T13:30:00.635Z"}
            labels={["DIAS", "HORAS", "MINUTOS", "SEGUNDOS"]}
            className="flip-clock"
          />
        )}
        <br />
        <br />
        <h2>Lugar y horario</h2>
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
        <h2>Lista de Presentes</h2>
        <p>
          Temos duas formas de enviar presente, uma é a lista de presente que é
          só clicar no ícone abaixo para ter acesso e a outra é enviar um PIX
          com uma mensagem bem legal pra gente
        </p>
        <br />
        <br />
        <p>
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
        </p>
        <br />
        <br />
        <a href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q">
          <img
            className="image-center"
            src={"/image/qrcode-pix.png"}
            alt="QrCode do Pix"
            href="https://nubank.com.br/pagar/48wth/mGWKfQeR5q"
            target="_blank"
            rel="noopener noreferrer"
          />
          Clique aqui
        </a>
        <p>Chave-pix: 97241cba-c833-4fae-bab8-dc2860245083</p>
        <br />
        <br />
        <img
          className="icons"
          src={"/image/megaphone.png"}
          alt="Prestenção"
          onClick={handleOpenInformacoesModal}
        />
        {canShare ? (
          <div>
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
          </div>
        ) : null}
      </IntructionBackground>
    </InstructionModal>
  );
};
