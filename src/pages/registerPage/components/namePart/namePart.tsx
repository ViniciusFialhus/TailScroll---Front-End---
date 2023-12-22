import logo from "../../../../assets/logo.jpg";

import FormButton from "../../../../components/button/formButton/formButton";
import FormTextField from "../../../../components/textField/formTextField/formTextField";

import { useState, useEffect } from "react";

import { registerName } from "../../../../services/api";

import "../../../../styles/global.css";
import "./namePart.css";

function NamePart({setChange}: {setChange:any}) {
  const [errMessage, setErrMessage] = useState("");
  const [errName, setErrName] = useState(false);
  const [loaderState, setLoaderState] = useState(false);
  const [backgroundState, setBackgroundState] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [form, setform] = useState({
    name: "",
    surname: "",
  });

  const handleChangeName = (event: any) => {
    const content = event.target.value;
    setform({ ...form, name: content });
  };

  const handleChangeSurname = (event: any) => {
    const content = event.target.value;
    setform({ ...form, surname: content });
  };

  const handleSubmit = async () => {
    try {
      await registerName(form);
      setBackgroundState(true);
      setLoaderState(true);
      setTimeout(() => {
        setChange(true)
      }, 1000);
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
    const { name } = form;
    if (!name && errMessage === "Credencial Requerida") {
      setErrName(true);
      setTimeout(() => {
        setErrName(false);
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
          <h1>Crie uma conta TailScroll</h1>
          <h4>Insira seu nome</h4>
        </section>
        <section className="formSection">
          <FormTextField
            label={"Nome"}
            onChange={handleChangeName}
            error={errName}
            errMessage={errMessage}
          />
        </section>
        <section className="formSection">
          <FormTextField
            label={"Sobrenome (opcional)"}
            onChange={handleChangeSurname}
          />
        </section>
        <section className="buttonSection" id="soloOneButton">
          <FormButton content="Avançar" empty={false} onClick={handleSubmit} />
        </section>
      </main>
    </>
  );
}

export default NamePart;
