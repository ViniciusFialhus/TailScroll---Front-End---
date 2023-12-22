import logo from "../../../../assets/logo.jpg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import FormButton from "../../../../components/button/formButton/formButton";
import FormTextField from "../../../../components/textField/formTextField/formTextField";

import "../../../../styles/global.css";
import "./emailPart.css";

function EmailPart() {
  const navigate = useNavigate();
  const [loaderState, setLoaderState] = useState(false);
  const [backgroundState, setBackgroundState] = useState(false)
  const handleClickNavigate = () => {
    setBackgroundState(true)
    setLoaderState(true)
    setTimeout(() => {
      navigate("/register")
    }, 1000)
  }

  return (
    <>
      <main className="containerPart" id={backgroundState ? "opacity" : 'noOpacity'}>
        <span className={loaderState ? "loader" : "loaderHidden"}></span>
        <section className="logoPart">
          <img src={logo} alt="logo" />
        </section>
        <section className="textSection">
          <h1>Fazer login</h1>
          <h4>Ir para o TailScroll</h4>
        </section>
        <section className="formSection">
          <FormTextField label={"Email ou Telefone"} />
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
          <FormButton content="Próximo" empty={false} onClick={""} />
        </section>
      </main>
    </>
  );
}

export default EmailPart;
