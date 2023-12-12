import toggleIcon from "../../../../assets/toggleIconBlack.png";
import MainButtonToggle from "../../../../components/button/mainButton/mainButtonToggle/mainButtonToggle";
import PastAndFileArea from "./components/pastAndFileArea/pastAndFileArea";
import { useState } from "react";
import "../../../../styles/global.css";
import "./mainSize.css";

function MainSize() {
  const [path, setPath] = useState('Root')

  return (
    <>
      <main className="containerMain">
        <section className="mainTitle">
          <h1>My {path}</h1>
          <img src={toggleIcon} />
        </section>
        <section className="filterButton">
          <div>
            <MainButtonToggle content="Type" />
          </div>
          <div>
            <MainButtonToggle content="Peaple" />
          </div>
          <div>
            <MainButtonToggle content="Modified" />
          </div>
        </section>
        <PastAndFileArea path={path} setPath={setPath}/>
      </main>
    </>
  );
}

export default MainSize;
