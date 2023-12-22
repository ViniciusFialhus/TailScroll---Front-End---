import logo from "../../../../assets/logo.jpg";
import defaultAvatarIcon from "../../../../assets/defaultAvatarIcon.jpg";

import FormButton from "../../../../components/button/formButton/formButton";
import FormTextField from "../../../../components/textField/formTextField/formTextField";

import { useState } from "react";

import "../../../../styles/global.css";
import "./passwordPart.css";

function PasswordPart() {
  const [checked, setChecked] = useState(false);
  const [type, setType] = useState("password");
  const handleClick = () => {
    if (!checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }

    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <>
      <main className="containerPart">
        <section className="logoPart">
          <img src={logo} alt="logo" />
        </section>
        <section className="textSection">
          <h1>Vinicius Marcos</h1>
          <div className="personSection">
            <img src={defaultAvatarIcon} />
            <h5>wviniciusmarcos@gmail.com</h5>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </section>
        <h4 className="text-line">
          Para continuar, primeiro confirme sua identidade
        </h4>
        <section className="formSection">
          <FormTextField label={"Digite sua senha"} type={type} />
        </section>
        <section className="showPasswordSection">
          <div
            className={checked ? "checkboxChecked" : "checkboxNotChecked"}
            onClick={handleClick}
          >
            {checked && <span className="material-symbols-outlined">done</span>}
          </div>
          <label>Mostrar senha</label>
        </section>
        <section className="buttonSection">
          <FormButton content="Esqueceu a senha?" empty={true}/>
          <FormButton content="Próximo"/>
        </section>
      </main>
    </>
  );
}

export default PasswordPart;
