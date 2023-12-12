import MainSize from "./components/mainSize/mainSize";
import MainButtonAdd from "../../components/button/mainButton/mainButtonAdd/mainButtonAdd";

import searchIcon from "../../assets/searchIcon.svg";
import filterIcon from "../../assets/filterIcon.png";
import logo from "../../assets/logo.png";
import "../../styles/global.css";
import "./mainPage.css";

function MainPage() {
  return (
    <>
      <main className="mainTag">
        <section className="containerTopSize">
          <div className="search">
            <div className="iconSearch">
              <img src={searchIcon} />
            </div>
            <input type="text" placeholder="Search" />
            <div className="iconFillter">
              <img src={filterIcon} />
            </div>
          </div>
        </section>
        <section className="containerLeftSize">
          <div className="title">
            <img src={logo} />
            <h1>TailScroll</h1>
          </div>
          <div className="newButton">
            <MainButtonAdd content="New" />
          </div>
        </section>
        <MainSize />
      </main>
    </>
  );
}

export default MainPage;
