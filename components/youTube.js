export default function YouTube({ background = "#f6f6ec" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%", // Ocupa el 100% de la altura del viewport
        width: "100%", // Ocupa el 100% del ancho disponible
        background: background,
      }}
    >
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%", // Relación de aspecto 16:9
          width: "80%", // Ocupará el 80% del ancho del contenedor padre
          borderRadius: "8px", // Borde redondeado
          overflow: "hidden", // Para que los bordes redondeados afecten el video
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // Sombra opcional para un mejor efecto visual
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/aCVHOoY219w"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
}
