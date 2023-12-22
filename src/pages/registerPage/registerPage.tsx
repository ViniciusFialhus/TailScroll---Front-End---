import NamePart from "./components/namePart/namePart";
import EmailPartRegister from "./components/emailPartRegister/emailPartRegister";

import { useState } from "react";

import "../../styles/global.css";
import "./registerPage.css";

function RegisterPage() {
  const [change, setChange] = useState(false)
  return (
    <>
      <main className="containerRegister">
        { change ? <EmailPartRegister/> : <NamePart setChange={setChange}/>}
      </main>
    </>
  );
}

export default RegisterPage;
