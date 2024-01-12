import MainButtonAdd from "../../../../components/button/mainButton/mainButtonAdd/mainButtonAdd";
import homeIcon from "../../../../assets/homeIcon/home_24px.svg";
import homeFillIcon from "../../../../assets/homeIcon/home_fill1_24px.svg";
import personIcon from "../../../../assets/personIcon/person_24px.svg";
import personFillIcon from "../../../../assets/personIcon/person_fill1_24px.svg";
import forumIcon from "../../../../assets/forumIcon/forum_24px.svg";
import forumFillIcon from "../../../../assets/forumIcon/forum_fill1_24px.svg";
import editSquareIcon from "../../../../assets/editSquareIcon/edit_square_24px.svg";
import editSquareFillIcon from "../../../../assets/editSquareIcon/edit_square_fill1_24px.svg";
import playArrowFillIcon from "../../../../assets/playArrowIcon/play_arrow_fill1_24px.svg";
import { useState } from "react";
import "../../../../styles/global.css";
import "./leftSize.css";

function LeftSize() {
  const [selectedIcon, setSelectedIcon] = useState("home");

  const iconMapping = {
    home: {
      normal: homeIcon,
      filled: homeFillIcon,
    },
    devices: {
      normal: personIcon,
      filled: personFillIcon,
    },
    forum: {
      normal: forumIcon,
      filled: forumFillIcon,
    },
    editSquare: {
      normal: editSquareIcon,
      filled: editSquareFillIcon,
    },
  };
  return (
    <>
      <main className="containerLeftSize">
        <div className="buttonContainer">
          <MainButtonAdd content="Novo" />
        </div>
        <div className="containerIconsLeftSize">
          <section
            className={`containerUserAdjuste ${
              selectedIcon === "home" ? "selected" : ""
            }`}
            onClick={() => setSelectedIcon("home")}
          >
            <img
              src={playArrowFillIcon}
              alt="playArrow"
              className={`arrow ${selectedIcon === "home" ? "selected" : ""}`}
            />
            <img
              src={
                selectedIcon === "home"
                  ? iconMapping["home"]["filled"]
                  : iconMapping["home"]["normal"]
              }
              alt="homeIcon"
            />
            <h4 className="title">Meu TailScroll</h4>
          </section>
          <section
            className={`containerUserAdjuste ${
              selectedIcon === "devices" ? "selected" : ""
            }`}
            onClick={() => setSelectedIcon("devices")}
          >
            <img
              src={playArrowFillIcon}
              alt="playArrow"
              className={`arrow ${
                selectedIcon === "devices" ? "selected" : ""
              }`}
            />
            <img
              src={
                selectedIcon === "devices"
                  ? iconMapping["devices"]["filled"]
                  : iconMapping["devices"]["normal"]
              }
              alt="deviceIcon"
            />
            <h4 className="title">Contatos</h4>
          </section>
        </div>
        <div className="containerIconsLeftSize">
          <section
            className={`containerUserAdjuste ${
              selectedIcon === "forum" ? "selected" : ""
            }`}
            onClick={() => setSelectedIcon("forum")}
          >
            <img
              src={playArrowFillIcon}
              alt="playArrow"
              className={`arrow ${
                selectedIcon === "forum" ? "selected" : ""
              }`}
            />
            <img
              src={
                selectedIcon === "forum"
                  ? iconMapping["forum"]["filled"]
                  : iconMapping["forum"]["normal"]
              }
              alt="deviceIcon"
            />
            <h4 className="title">TailFórum</h4>
          </section>
          <section
            className={`containerUserAdjuste ${
              selectedIcon === "editSquare" ? "selected" : ""
            }`}
            onClick={() => setSelectedIcon("editSquare")}
          >
            <img
              src={playArrowFillIcon}
              alt="playArrow"
              className={`arrow ${
                selectedIcon === "editSquare" ? "selected" : ""
              }`}
            />
            <img
              src={
                selectedIcon === "editSquare"
                  ? iconMapping["editSquare"]["filled"]
                  : iconMapping["editSquare"]["normal"]
              }
              alt="deviceIcon"
            />
            <h4 className="title">ScrollCreate</h4>
          </section>
        </div>
      </main>
    </>
  );
}

export default LeftSize;
