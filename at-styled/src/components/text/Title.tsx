import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <br></br>
    </>
  );
};

export default Title;
