import NamePart from "./components/namePart/namePart";
import EmailPartRegister from "./components/emailPartRegister/emailPartRegister";

import { useState } from "react";

import "../../styles/global.css";
import "./registerPage.css";

function RegisterPage({
  setCheckedCreateAccount,
}: {
  setCheckedCreateAccount: any;
}) {
  const [change, setChange] = useState(false);
  const [name, setName] = useState("")
  return (
    <>
      <main className="containerRegister">
        {change ? <EmailPartRegister setCheckedCreateAccount={setCheckedCreateAccount} name={name}/> : <NamePart setChange={setChange} setName={setName} />}
      </main>
    </>
  );
}

export default RegisterPage;
