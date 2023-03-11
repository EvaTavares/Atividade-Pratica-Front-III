import styled from "styled-components";

interface WrapperStyledProps {
  backgroundcolor?: string;
  color?: string;
}

const WrapperStyled = styled.div<WrapperStyledProps>`
  background-color: ${(props) => props.backgroundcolor || "#fff"};
  color: ${(props) => props.color || "#333"};
`;

export default WrapperStyled;
