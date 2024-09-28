import { styled } from "@xstyled/styled-components";
import { Frame } from "@react95/core";

export const InsideModal = styled(Frame)`
  text-align: center;
  height: 100%;
  overflow: auto;
  /* padding: 20px; */
  box-shadow: none;
`;
export const InstructionModal = styled(Frame)`
  text-align: center;
  /* height: 100%; */
  box-shadow: none;
  overflow: hidden;
  max-height: 100vh; /* Evita que ocupe más que la altura de la ventana */
  overflow-y: auto; /* Permite el scroll si el contenido es más largo */
  color: #f6f6ec;
`;
