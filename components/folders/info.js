import { InsideModal } from "../insideModal";

export const Info = ({ overflowRef, isMobile }) => {
  return (
    <InsideModal bg="white" boxShadow="out" ref={overflowRef}>
      <div>
        {/* <h1 className="titulo">Traje + Hospedagem</h1>
        <p>
          Queremos que todos estejam BEM BONITOS mas também confortáveis pra
          arrasar na cantoria do karaokê. Recomendamos para os homens terno e
          camisa social, e para as mulheres vestidos longos ou midi, macacões,
          ternos. Se quiser complementar o look com um tênis casual que você
          goste muito, fique à vontade!
        </p>
        <p>Abaixo colocamos algumas inspirações</p>
        <br />
        <div className="polaroid">
          <img
            className="dress-code"
            src={"/image/dress-code-man.png"}
            alt="Dress code homem"
          />
          <div className="container"></div>
        </div>
        <div className="polaroid">
          <img
            className="dress-code"
            src={"/image/dress-code-woman.png"}
            alt="Dress code mulher"
          />
          <div className="container"></div>
        </div> */}

        <h1 className="titulo">Sitios de interes</h1>
        <p>
          Hemos pensado algunos sitios que os pueden ayudar a que vuestra
          estancia sea más llevadera
        </p>
        <br />
        <h2 className="titulo">Hotel Recanto das Perdizes</h2>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.97851478471!2d-46.6623388!3d-23.5326956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce581a41a1bb1b%3A0xf05c0f691a9b6f7!2sHotel%20Recanto%20das%20Perdizes!5e0!3m2!1spt-BR!2sbr!4v1697812187519!5m2!1spt-BR!2sbr"
          width={isMobile ? "210" : "400"}
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <br />
        <h2 className="titulo">The Standard Residence Higienópolis</h2>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14631.666419471805!2d-46.6646499!3d-23.5355017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b6a8a83a6f%3A0x5b4da370f5e40c89!2sThe%20Standard%20Residence%20Higien%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1697812239172!5m2!1spt-BR!2sbR"
          width={isMobile ? "210" : "400"}
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </InsideModal>
  );
};
