import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      <h3>{text}</h3>
      <br></br>
    </>
  );
};

export default Title;
