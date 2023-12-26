import logo from "../../../../assets/logo.jpg";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import FormButton from "../../../../components/button/formButton/formButton";
import FormTextField from "../../../../components/textField/formTextField/formTextField";

import { checkingEmail } from "../../../../services/api";

import "../../../../styles/global.css";
import "./emailPart.css";

function EmailPart({
  modalCreateAccount,
  setModalCreateAccount,
  setChange,
  setEmail,
}: {
  modalCreateAccount: any;
  setModalCreateAccount: any;
  setChange: any;
  setEmail: any;
}) {
  const navigate = useNavigate();
  const [errEmail, setErrEmail] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [loaderState, setLoaderState] = useState(false);
  const [backgroundState, setBackgroundState] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [form, setform] = useState({
    email: "",
  });
  const handleClickNavigate = () => {
    setBackgroundState(true);
    setLoaderState(true);
    setTimeout(() => {
      navigate("/register");
    }, 1000);
  };

  const handleChangeEmail = (event: any) => {
    const content = event.target.value;
    setform({ ...form, email: content });
  };

  const handleSubmit = async () => {
    try {
      const response = await checkingEmail(form);
      const { token } = response.data;
      localStorage.setItem("token", token);
      setBackgroundState(true);
      setLoaderState(true);
      setEmail(form.email);
      setTimeout(() => {
        setChange(true);
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
    const { email } = form;
    if (!email && errMessage === "Credencial Requerida") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
      }, 2000);
    }
    if (errMessage === "Não existe usuário com este e-mail") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
      }, 2000);
    }
  }, [rerender, errMessage]);

  useEffect(() => {
    setTimeout(() => {
      setModalCreateAccount(false);
    }, 1000);

  }, [modalCreateAccount]);

  return (
    <>
      {modalCreateAccount && (
        <div className="success-container">
          <div className="row">
            <div className="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
              <div className="icon">
                <span className="material-symbols-outlined">done</span>
              </div>
              <h1>Sucesso!</h1>
              <p>Enviamos uma confirmação para seu e-mail</p>
              <p>para verificação.</p>
            </div>
          </div>
        </div>
      )}
      <main
        className="containerPart"
        id={backgroundState ? "opacity" : "noOpacity"}
      >
        <span className={loaderState ? "loader" : "loaderHidden"}></span>
        <section className="logoPart">
          <img src={logo} alt="logo" />
        </section>
        <section className="textSection">
          <h1>Fazer login</h1>
          <h4>Ir para o TailScroll</h4>
        </section>
        <section className="formSection">
          <FormTextField
            label={"Email ou Telefone"}
            onChange={handleChangeEmail}
            errMessage={errMessage}
            error={errEmail}
          />
        </section>
        <a className="forgotItem">Esqueceu seu e-mail?</a>
        <section className="utilsSection">
          <h5>
            Não está no seu computador? Use uma janela de navegação privada para
            fazer login.{" "}
            <a
              target="_blank"
              href="https://support.google.com/accounts/answer/2917834?visit_id=638385062318610917-705932963&p=signin_privatebrowsing&hl=pt&rd=1"
              id="more"
            >
              Saiba mais
            </a>
          </h5>
        </section>
        <section className="buttonSection">
          <FormButton
            content="Criar conta"
            empty={true}
            onClick={handleClickNavigate}
          />
          <FormButton content="Próximo" empty={false} onClick={handleSubmit} />
        </section>
      </main>
    </>
  );
}

export default EmailPart;
