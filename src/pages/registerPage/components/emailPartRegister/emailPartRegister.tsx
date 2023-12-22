import logo from "../../../../assets/logo.jpg";

import FormTextField from "../../../../components/textField/formTextField/formTextField";
import FormButton from "../../../../components/button/formButton/formButton";

import { registerForm } from "../../../../services/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "../../../../styles/global.css";
import "./emailPartRegister.css";

function EmailPartRegister() {
  const navigate = useNavigate()
  const [errMessage, setErrMessage] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errConfirmedPassword, setErrConfirmedPassword] = useState(false);
  const [loaderState, setLoaderState] = useState(false);
  const [backgroundState, setBackgroundState] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [checked, setChecked] = useState(false);
  const [type, setType] = useState("password");
  const [form, setform] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
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

  const handleChangeEmail = (event: any) => {
    const content = event.target.value;
    setform({ ...form, email: content });
  };

  const handleChangePassword = (event: any) => {
    const content = event.target.value;
    setform({ ...form, password: content });
  };

  const handleChangeConfirmedPassword = (event: any) => {
    const content = event.target.value;
    setform({ ...form, confirmedPassword: content });
  };

  const handleSubmit = async () => {
    try {
      await registerForm(form);
      setBackgroundState(true);
      setLoaderState(true);
      setTimeout(() => {
        navigate('/main')
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
    const { email, password, confirmedPassword } = form;
    if (!email && errMessage === "Credencial Requerida") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
      }, 2000);
    }
    if (!password && errMessage === "Credencial Requerida") {
      setErrPassword(true);
      setTimeout(() => {
        setErrPassword(false);
      }, 2000);
    }
    if (!confirmedPassword && errMessage === "Credencial Requerida") {
      setErrConfirmedPassword(true);
      setTimeout(() => {
        setErrConfirmedPassword(false);
      }, 2000);
    }
    if (errMessage === "Senhas não conhecidem") {
      setErrPassword(true);
      setErrConfirmedPassword(true);
      setTimeout(() => {
        setErrPassword(false);
        setErrConfirmedPassword(false);
      }, 2000);
    }
    if (errMessage === "Existe usuário com este e-mail") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
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
          <h1>Crie sua conta TailScroll</h1>
        </section>
        <section className="formSection">
          <FormTextField
            label={"Adicione seu endereço de E - mail"}
            onChange={handleChangeEmail}
            error={errEmail}
            errMessage={errMessage}
          />
        </section>
        <section className="formSection">
          <FormTextField
            label={"Adicione sua Senha"}
            type={type}
            onChange={handleChangePassword}
            error={errPassword}
            errMessage={errMessage}
          />
        </section>
        <section className="formSection">
          <FormTextField
            label={"Confirme sua Senha"}
            type={type}
            onChange={handleChangeConfirmedPassword}
            error={errConfirmedPassword}
            errMessage={errMessage}
          />
        </section>
        <section className="buttonSection">
          <section className="showPasswordSection">
            <div
              className={checked ? "checkboxChecked" : "checkboxNotChecked"}
              onClick={handleClick}
            >
              {checked && (
                <span className="material-symbols-outlined" id="done">done</span>
              )}
            </div>
            <label>Mostrar senha</label>
          </section>
          <FormButton content="Avançar" empty={false} onClick={handleSubmit}/>
        </section>
      </main>
    </>
  );
}

export default EmailPartRegister;
