import { Frame } from "@react95/core";
import {
  ButtonSpotify,
  DescriptionContainer,
  Text,
  Title,
} from "../../utils/ui";

export const Spotify = () => {
  return (
    <div
      style={{
        background: "#292929",
      }}
    >
      <div
        style={{
          background: "#292929",
          padding: "10px 20px",
          marginBottom: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderBottom: "2px solid #f6f6ec",
        }}
      >
        {/* <Title color="#f6f6ec">¿Alguna canción por la cabeza?</Title> */}
        <Text color="#f6f6ec">Por si quieres añadir alguna canción 🎶</Text>
        <ButtonSpotify>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/playlist/5PHoN3GJZGKWhpUb02pqCj?si=ahb4btNJTmqMN4xkBACeJg&pi=e-hrqln1gUQpi8&nd=1&dlsi=857ca99a15a346c4"
          >
            <img src={"/logo-spotify.png"} alt="spotify" />
          </a>
        </ButtonSpotify>
      </div>

      <Frame
        boxShadow="none"
        style={{
          height: "500px",
          background: "#292929",
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/5PHoN3GJZGKWhpUb02pqCj?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Músicas para lembrar da Mo"
        ></iframe>
      </Frame>
    </div>
  );
};
