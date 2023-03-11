import React from "react";
import { useState } from "react";
import Title from "./components/text/Title";
import Cards from "./components/cards/Cards";
import GlobalStyled from "./components/config/GlobalStyled";
import ButtonStyled from "./components/button/ButtonsStyled";
import WrapperStyled from "./components/WrapperStyled";
import MainStyled from "./components/structure/MainStyled";
import MainTextStyled from "./components/structure/MainTextStyled";
import MainImageStyled from "./components/structure/MainImageStyled";
import ParagraphStyled from "./components/text/ParagraphStyled";
import Paragraph from "./components/text/Paragraph";
import Section from "./components/structure/Section";
import Caption from "./components/text/Caption";
import Footer from "./components/structure/Footer";
import FooterStyled from "./components/structure/FooterStyled";
import List from "./components/text/List";
import CardItems from "./components/cards/CardsItems";

//Images
import ceu from "./components/img/ceu.jpg";
import coqueiros from "./components/img/coqueiros.jpg";
import louge from "./components/img/louge.jpg";
import praia from "./components/img/praia.jpg";

//icons
import { FiMonitor } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
import { BsDatabaseCheck } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function App() {
  const [darkMod, setDarkMode] = useState<boolean>(false);
  console.log(darkMod);
  function darkMode() {
    setDarkMode(!darkMod);
    console.log(darkMod);
  }

  return (
    <>
      <GlobalStyled />
      <WrapperStyled
        backgroundcolor={darkMod ? "#333" : "#f8f9fb"}
        color={darkMod ? "#f8f9fb" : "#333"}
      >
        <Section backgroundImage={ceu}>
          <Title text="Minha primeira página com React"></Title>
          <ButtonStyled onClick={darkMode}> Modo escuro</ButtonStyled>
        </Section>

        <Cards>
          <CardItems>
            <ParagraphStyled>
              <FiMonitor size="3rem"></FiMonitor>
              <Caption text="Somente para desktop" />
              <Paragraph />
            </ParagraphStyled>
          </CardItems>
          <CardItems>
            <ParagraphStyled>
              <BsDatabaseCheck size="3rem"></BsDatabaseCheck>
              <Caption text="Criado com componentes" />
              <Paragraph />
            </ParagraphStyled>
          </CardItems>
          <CardItems>
            <ParagraphStyled>
              <BsCheckCircle size="3rem"></BsCheckCircle>
              <Caption text="Fácil aproveitamento" />
              <Paragraph />
            </ParagraphStyled>
          </CardItems>
        </Cards>

        <MainStyled>
          <MainTextStyled>
            <Caption text="Lorm Ipsum" />
            <Paragraph />
          </MainTextStyled>
          <MainTextStyled>
            <MainImageStyled backgroundImage={coqueiros} />
          </MainTextStyled>
        </MainStyled>

        <MainStyled>
          <MainTextStyled>
            <MainImageStyled backgroundImage={louge} />
          </MainTextStyled>
          <MainTextStyled>
            <Caption text="Lorm Ipsum" />
            <Paragraph />
          </MainTextStyled>
        </MainStyled>

        <MainStyled>
          <MainTextStyled>
            <Caption text="Lorm Ipsum" />
            <Paragraph />
          </MainTextStyled>

          <MainTextStyled>
            <MainImageStyled backgroundImage={praia} />
          </MainTextStyled>
        </MainStyled>

        <Section backgroundImage={ceu}>
          <Title text="Contato"></Title>
        </Section>

        <Footer>
          <FooterStyled>
            <List />
          </FooterStyled>

          <BsFacebook size="2rem"></BsFacebook>
          <AiFillTwitterCircle size="2rem"></AiFillTwitterCircle>
          <BsInstagram size="2rem"></BsInstagram>
        </Footer>
      </WrapperStyled>
    </>
  );
}

export default App;
