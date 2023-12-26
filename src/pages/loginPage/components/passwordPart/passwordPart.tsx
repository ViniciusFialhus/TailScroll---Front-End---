import logo from "../../../../assets/logo.jpg";
import defaultAvatarIcon from "../../../../assets/defaultAvatarIcon.jpg";

import FormButton from "../../../../components/button/formButton/formButton";
import FormTextField from "../../../../components/textField/formTextField/formTextField";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../../../styles/global.css";
import "./passwordPart.css";
import { checkingPassword } from "../../../../services/api";

function PasswordPart({ email }: { email: string }) {
  const navigate = useNavigate();
  const [errPassword, setErrPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [loaderState, setLoaderState] = useState(false);
  const [backgroundState, setBackgroundState] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [checked, setChecked] = useState(false);
  const [type, setType] = useState("password");
  const [form, setform] = useState({
    password: "",
  });

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

  const handleChangePassword = (event: any) => {
    const content = event.target.value;
    setform({ ...form, password: content });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await checkingPassword(form, token as string);
      setBackgroundState(true);
      setLoaderState(true);
      setTimeout(() => {
        navigate("/main");
      }, 2000);
    } catch (error: any) {
      setErrMessage(error.response.data.error);
      if (rerender) {
        setRerender(false);
      } else {
        setRerender(true);
      }
    }
  };

  useEffect(() => {
    const { password } = form;
    if (!password && errMessage === "Credencial Requerida") {
      setErrPassword(true);
      setTimeout(() => {
        setErrPassword(false);
      }, 2000);
    }
    if (errMessage === "Credencial Inválida") {
      setErrPassword(true);
      setTimeout(() => {
        setErrPassword(false);
      }, 2000);
    }
  }, [rerender, errMessage]);

  return (
    <>
      <main
        className="containerPart"
        id={backgroundState ? "opacity" : "noOpacity"}
      >
        <span className={loaderState ? "loader" : "loaderHidden"}></span>
        <section className="logoPart">
          <img src={logo} alt="logo" />
        </section>
        <section className="textSection">
          <h1>Vinicius Marcos</h1>
          <div className="personSection">
            <img src={defaultAvatarIcon} />
            <h5>{email}</h5>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </section>
        <h4 className="text-line">
          Para continuar, primeiro confirme sua identidade
        </h4>
        <section className="formSection">
          <FormTextField label={"Digite sua senha"} type={type} onChange={handleChangePassword} errMessage={errMessage} error={errPassword} />
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
          <FormButton content="Esqueceu a senha?" empty={true} />
          <FormButton content="Próximo" onClick={handleSubmit} />
        </section>
      </main>
    </>
  );
}

export default PasswordPart;
