import { InsideModal } from "../insideModal";

export const AboutUS = ({ overflowRef }) => {
  return (
    <InsideModal bg="white" boxShadow="out" ref={overflowRef}>
      <div>
        <h1 className="titulo">Sobre Nosotros</h1>
        <br />
        <br />
        <p>
          "Quem um dia irá dizer que não existe razão pras coisas feitas pelo
          coração?"
        </p>
        <p>
          Nosso amor começou de repente, sem que a gente percebesse ele já
          estava ali. A nossa amizade se tornou tão grande que decidimos passar
          o resto da vida juntos!
        </p>
        <br />
        <br />
        <br />
        <img
          className="image-center about-us"
          src={"/image/monica.jpg"}
          alt="Monica"
        />
        <h2 className="titulo">Monica por Henrique</h2>
        <p>
          "Uma mulher linda, de largo sorriso e de um humor refinado, ótima e
          atenta ouvinte.
        </p>
        <p>
          Se você procura por algum lugar novo onde comer, pode consultar seu
          imenso e vasto{" "}
          <a
            href="https://maps.app.goo.gl/4yBS6wbEfL3uR3AV9"
            target="_blank"
            rel="noopener noreferrer"
          >
            catálogo de lugares para visitar
          </a>
          , sempre haverá um cantinho da cidade não explorado que ela
          cuidadosamente guardou para um momento em que um passeio se faz
          necessário.
        </p>
        <p>
          Sua paixão por cachorro não se resume ao seu maior amor, a Sophia, vai
          muito além, sorrindo e apontando para cada animalzinho na rua. Adora
          dar nomes a cachorros de portão e criar personalidades inteiras
          baseadas no vazio olhar que eles tem, sem julgamentos, porque depois
          desses anos todos juntos esse é o meu maior passatempo também.
        </p>
        <p>
          Uma mão mágica para a cozinha, parte pela sua intuição para combinar
          sabores e texturas e parte pelo seu lado de estar sempre aprendendo
          uma coisa nova nos mínimos detalhes, seja ela todos os passos de fazer
          um carbonara perfeito até como é extraído o açafrão das flores.
        </p>
        <p>
          Enfim, a mulher que eu escolhi para passar o resto da vida junto."
        </p>
        <br />
        <br />
        <br />
        <br />
        <img
          className="image-center about-us"
          src={"/image/henrique.jpg"}
          alt="Henrique"
        />
        <h2 className="titulo">Henrique por Monica</h2>
        <p>
          "É impossível encontrar uma pessoa que não goste do Henrique. Ele é a
          personificação de um labrador, simpático, extrovertido e tranquilo. No
          rolê, ele é a central de assuntos, sempre ouviu a última fofoca (porém
          só lembra a metade), ouviu um podcast recentemente, viu um
          documentário sobre, sempre chega dizendo: “já imaginou se acontece tal
          coisa?”
        </p>
        <p>
          Sempre disponível pra dar uma voltinha, o Henrique gosta de conhecer
          cafés especiais, de comer pratos preparados em grandes restaurantes,
          da mesma maneira que entra em qualquer buteco pra comer um baião de
          dois e tomar cerveja.
        </p>
        <p>
          O jeito lógico de programador não tirou o lado cuidadoso com as
          pessoas e a dedicação que o Henrique tem com aqueles que são
          importantes na sua vida. É com os amigos e com a família que ele
          prefere passar a maior parte do tempo, principalmente se tiver um jogo
          do São Paulo para assistir e o lugar for pet friendly, pra poder ficar
          com a sua melhor amiga Sophia"
        </p>
      </div>
    </InsideModal>
  );
};
