import MainButtonAdd from "../../../../components/button/mainButton/mainButtonAdd/mainButtonAdd";
import { useState } from "react";
import "../../../../styles/global.css";
import "./leftSize.css";

function LeftSize() {
  const [filled, setFilled] = useState(false);
  const handleIconClick = () => {
    setFilled(!filled);
  };

  return (
    <>
      <main className="containerLeftSize">
        <div className="buttonContainer">
          <MainButtonAdd content="Novo" />
        </div>
        <section className="containerUserAdjuste">
         
        </section>
        <section className="containerUserAdjuste"></section>
        <section className="containerUserAdjuste"></section>
      </main>
    </>
  );
}

export default LeftSize;
