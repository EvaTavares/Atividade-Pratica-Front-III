import styled from "styled-components";

interface SectionProps {
  height?: string;
  backgroundImage: string;
}

const Header = styled.section<SectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => `url(${props.backgroundImage})`};
  background-color: #f8f9fb;
  background-size: cover;
  height: ${(props) => props.height || "250px"};
  color: #fff;
  position: relative;
`;

export default Header;
