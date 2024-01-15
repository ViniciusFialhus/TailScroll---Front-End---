import "../../../../styles/global.css";
import arrowDrop from "../../../../assets/arrow_drop_down_fill1_24px.svg";

import { useState } from "react";

import MainButtonToggle from "../../../../components/button/mainButton/mainButtonToggle/mainButtonToggle";
import PastAndFileArea from "./components/pastAndFileArea/pastAndFileArea";

import "./mainSize.css";

function MainSize() {
  const [path, setPath] = useState("TailScroll");
  return (
    <>
      <main className="containerMainSize">
        <section className="mainTitle">
          <h1>Meu {path}</h1>
          <img src={arrowDrop} />
        </section>
        <section className="filterButton">
          <div>
            <MainButtonToggle content="Tipo" />
          </div>
          <div>
            <MainButtonToggle content="Pessoas" />
          </div>
          <div>
            <MainButtonToggle content="Modificado" />
          </div>
        </section>
        <PastAndFileArea path={path} setPath={setPath}/>
      </main>
    </>
  );
}

export default MainSize;
