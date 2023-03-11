import React from "react";

const List: React.FC = () => {
  return (
    <React.Fragment>
      <ul>
        <li>Sobre</li>
        <li>Contato</li>
        <li>Termos de uso</li>
        <li>Política de privacidade</li>
      </ul>
      <br />
      <div>
        <span>&copy; Eva Tavares</span>
      </div>
    </React.Fragment>
  );
};

export default List;
