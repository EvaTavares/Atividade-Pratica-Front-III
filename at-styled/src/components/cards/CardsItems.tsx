import styled from "styled-components";

interface CardsProps {
  backgroundColor?: string;
}

const CardItems = styled.div<CardsProps>`
  display: flex;
  align-items: center;
  padding: 0 100px;
  color: black;
  height: 250px;
  background-color: ${(props) => props.backgroundColor || "#96B8C9"};
`;

export default CardItems;
