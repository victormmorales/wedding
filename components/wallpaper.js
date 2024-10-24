import { createGlobalStyle } from "@xstyled/styled-components";

const WallpaperStyle = createGlobalStyle`
  body {
    /* background: url("/image/bg-windows98.jpg") no-repeat center center fixed; */
    background: url("/image/fondo-web.png") no-repeat center center fixed;
    background-size: cover;
  }
  `;

export default function Wallpaper() {
  return <WallpaperStyle />;
}
