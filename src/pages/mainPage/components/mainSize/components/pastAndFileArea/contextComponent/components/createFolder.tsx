import { useState, useEffect } from "react";
import {
  viewAllSystem,
  createFolder,
} from "../../../../../../../../services/api";
import error from '../../../../../../../../assets/arrow_drop_down_fill1_24px.svg'
import FormButton from "../../../../../../../../components/button/formButton/formButton";
import FormTextField from "../../../../../../../../components/textField/formTextField/formTextField";
import "../../../../../../../../styles/global.css";

function CreateFolder({
  xPos,
  yPos,
  path,
}: {
  xPos: number;
  yPos: number;
  path: any;
}) {
  const [allSystem, setAllSystem] = useState<any[]>([]);
  const [errName, setErrName] = useState(false);
  const [errType, setErrType] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [formNewFolder, setFormNewFolder] = useState({
    name: "",
    type: "",
    path: path,
  });

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const content = event.target.value;
    setFormNewFolder({
      ...formNewFolder,
      name: content,
    });
  };

  const handleChangType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const content = event.target.value;
    setFormNewFolder({
      ...formNewFolder,
      type: content,
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await createFolder(formNewFolder, token as string);
      window.location.reload();
    } catch (error: any) {
      setErrMessage(error?.response?.data?.error || "Unknown error occurred");
      if (rerender) {
        setRerender(false);
      } else {
        setRerender(true);
      }
    }
  };

  useEffect(() => {
    const { name } = formNewFolder;
    if (!name && errMessage === "Required Credentials") {
      setErrName(true);
      setTimeout(() => {
        setErrName(false);
      }, 1000);
    }
  }, [rerender, errMessage]);

  useEffect(() => {
    const allSystem = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await viewAllSystem(token as string);
        setAllSystem(response.data);
      } catch (error) {
        console.error(error);
        setAllSystem([]);
      }
    };

    allSystem();
  }, []);

  return (
    <>
      <main
        className="mainNewFolder"
        style={{ top: yPos - 70, left: xPos + 190 }}
      >
        <section className="textSectionNewFolder">
          <h4>Nova Pasta</h4>
        </section>
        <section className="formPart">
          <div className={errName ? "containerInputError" : "containerInput"}>
            <FormTextField
              errMessage={errMessage}
              error={errName}
              label="Nome da pasta"
              onChange={handleChangeName}
            />
          </div>
          <select
            className={errType ? "errSelectedSystem" : "selectedSystem"}
            onChange={handleChangType}
          >
            <option selected disabled>
              Escolha o Sistema
            </option>
            {allSystem.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
          <section className={errType ? "errSection" : "sectionBase"}>
            <img src={error} />
            <label>{errMessage}</label>
          </section>
          <div className="containerButtonNewFolder">
            <FormButton content="Avançar" onClick={handleSubmit} />
          </div>
        </section>
      </main>
    </>
  );
}

export default CreateFolder;
