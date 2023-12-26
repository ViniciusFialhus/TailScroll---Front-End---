import PasswordPart from "./components/passwordPart/passwordPart";
import EmailPart from "./components/emailPart/emailPart";

import { useState } from "react";

import "../../styles/global.css";
import "./loginPage.css";

function LoginPage({ modalCreateAccount, setModalCreateAccount }: { modalCreateAccount: any, setModalCreateAccount:any }) {
  const [email, setEmail] = useState("");
  const [change, setChange] = useState(false);
  return (
    <>
      <main className="containerLogin">
        {change ? (
         <PasswordPart email={email} /> 
        ) : (
          <EmailPart modalCreateAccount={modalCreateAccount} setChange={setChange} setEmail={setEmail} setModalCreateAccount={setModalCreateAccount}/>
        )}
      </main>
    </>
  );
}

export default LoginPage;
