import { Drvspace7, Shell325, Syncui135, RecycleFull } from "@react95/icons";

import { styled } from "@xstyled/styled-components";

const DesktopIcon = styled.div({
  marginTop: "20px",
  marginLeft: "19px",
  height: "70px",
  width: "70px",
});

const DesktopIconText = styled.p({
  marginTop: "4px",
  textAlign: "center",
});

const DesktopIconCasamos = styled(Syncui135)`
  display: block;
  margin: auto;
`;
const DesktopIconImage = styled(RecycleFull)`
  display: block;
  margin: auto;
`;

export default function DesktopIcons({
  setShowCasamentoModal,
  setShowPadrinhosModal,
}) {
  const handleToggleCasamento = () => {
    setShowCasamentoModal((s) => !s);
  };

  const handleToggleAsistencia = () => {
    setShowPadrinhosModal((s) => !s);
  };

  const handleClick = () => {
    alert("¿Qué haces cotilleando donde no debes? 😒");
  };

  return (
    <div>
      <DesktopIcon onClick={handleToggleCasamento} className="pointer">
        <DesktopIconCasamos className="pointer" variant="32x32_4" />
        <DesktopIconText className="pointer">Nos casamos!</DesktopIconText>
      </DesktopIcon>

      <DesktopIcon onClick={handleToggleAsistencia} className="pointer">
        <DesktopIconCasamos className="pointer" variant="32x32_4" />
        <DesktopIconText className="pointer">Asistencia</DesktopIconText>
      </DesktopIcon>

      <DesktopIcon onClick={handleClick} className="pointer">
        <DesktopIconImage className="pointer" variant="32x32_4" />
        <DesktopIconText className="pointer">Papelera</DesktopIconText>
      </DesktopIcon>
    </div>
  );
}
