import PasswordPart from "./components/passwordPart/passwordPart";
import EmailPart from "./components/emailPart/emailPart";
import "../../styles/global.css";
import "./loginPage.css";


function LoginPage() {
  return (
    <>
      <main className="containerLogin">
        <EmailPart/>
      </main>
    </>
  );
}

export default LoginPage;
