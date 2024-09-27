import { Frame } from "@react95/core";

export const Spotify = () => {
  return (
    <Frame
      boxShadow="none"
      style={{
        height: "352px",
      }}
    >
      <iframe
        src="https://open.spotify.com/embed/playlist/6AZGGg2G22U5W0l3QVxyOv?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Músicas para lembrar da Mo"
      ></iframe>
    </Frame>
  );
};
