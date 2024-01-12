import { useState } from "react";
import logo from "../../../../assets/logo.jpg";
import helpIcon from "../../../../assets/helpIcon/help_24px.svg";
import settingsIcon from "../../../../assets/settingsIcon/settings_24px.svg";
import appsIcon from "../../../../assets/appsIcon/apps_24px.svg";

import defaultAvatarIcon from "../../../../assets/defaultAvatarIcon.jpg";
import "../../../../styles/global.css";
import "./topSize.css";

function TopSize() {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
    console.log("Input focado");
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    console.log("Input fora de foco");
  };

  return (
    <>
      <main className="containerTopSize">
        <section className="logoSectionTop">
          <img src={logo} alt="logo" />
          <h1>TailScroll</h1>
        </section>
        <section className={`searchSection ${inputFocused ? "focused" : ""}`}>
          <div id="leftSpan">
            <span className="material-symbols-outlined">search</span>
          </div>
          <div className="input">
            <input
              className={`inputBaseSearch ${inputFocused ? "focused" : ""}`}
              placeholder="Pesquisar no TailScroll"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          <div id="rightSpan">
            <span className="material-symbols-outlined">tune</span>
          </div>
        </section>
        <section className="iconsConjunts">
          <div className="containerIcons">
            <img src={helpIcon} about="helpIcon" />
            <img src={settingsIcon} about="settingsIcon" />
            <img src={appsIcon} about="appsIcon" />
          </div>
          <div className="profile">
            <img src={defaultAvatarIcon} alt="avatar" />
          </div>
        </section>
      </main>
    </>
  );
}

export default TopSize;
