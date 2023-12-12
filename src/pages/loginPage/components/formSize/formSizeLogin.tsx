import TextField from "../../../../components/textField/loginAndRegisterTextField/loginAndRegisterTextField";
import LoginAndRegisterButton from "../../../../components/button/loginAndRegisterButton/loginAndRegisterButton";
import successIcon from "../../../../assets/successIcon.svg";

import { useState, useEffect } from "react";
import { loginUser } from "../../../../services/api";

import "./formSizeLogin.css";
import "../../../../styles/global.css";

function FormSizeLogin() {
  const [checkboxState, setCheckboxState] = useState("password");
  const [errMessage, setErrMessage] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [modalSucess, setModalSucess] = useState(false);
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeInputEmail = (event: any) => {
    const content = event.target.value;
    setUserForm({
      ...userForm,
      email: content,
    });
  };

  const handleChangeInputPassword = (event: any) => {
    const content = event.target.value;
    setUserForm({
      ...userForm,
      password: content,
    });
  };
  const handleClick = () => {
    if (checkboxState === "text") {
      setCheckboxState("password");
    } else {
      setCheckboxState("text");
    }
  };
  const handleSubmit = async () => {
    try {
      await loginUser(userForm);
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
    const modalTrue = localStorage.getItem("modalTrue");

    if (modalTrue) {
      setModalSucess(true);
      localStorage.removeItem("modalTrue");

      setTimeout(() => {
        setModalSucess(false);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    const { email, password } = userForm;
    if (!email && errMessage === "Required Credentials") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
      }, 1000);
    }
    if (!password && errMessage === "Required Credentials") {
      setErrPassword(true);
      setTimeout(() => {
        setErrPassword(false);
      }, 1000);
    }
    if (errMessage === "User not found") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
      }, 1000);
    }
    if (errMessage === "Credentials Invalid") {
      setErrPassword(true);
      setTimeout(() => {
        setErrPassword(false);
      }, 1000);
    }
    if (errMessage === "Internal Server Error") {
      setErrEmail(true);
      setErrPassword(true);
      setTimeout(() => {
        setErrEmail(false);
        setErrPassword(false);
      }, 1000);
    }
  }, [rerender, errMessage]);

  return (
    <>
      <main className="formSizeLogin">
       
          <div className="textSize">
            <h1 className="primaryText">Sign In</h1>
            <h4 className="secundaryText">Use your TailScroll account</h4>
          </div>
          <div className="formSize">
            <div className="text">
              <TextField
                placeholder={"E-mail"}
                type={"email"}
                onChange={handleChangeInputEmail}
                error={errEmail}
                errMessage={errMessage}
              />
            </div>
            <div className="text">
              <TextField
                placeholder={"Password"}
                type={checkboxState}
                onChange={handleChangeInputPassword}
                error={errPassword}
                errMessage={errMessage}
              />
            </div>
           
            <section className="sectionCheckboxPassword">
              <input
                type="checkbox"
                className="checkboxPassword"
                onClick={handleClick}
              />
              <h4 className="showPasswordText">Show Password</h4>
            </section>
            <h2 className="forgotText">Forgot your password?</h2>
            <div className="containerPersonButton">
              <LoginAndRegisterButton
                content={"SIGN IN"}
                type="loginAndRegisterButtonFull"
                onClick={handleSubmit}
              />
            </div>
            {modalSucess && (
              <div className="modalSize">
                <img src={successIcon} className="sucess" />
                Registration Success
              </div>
            )}
          </div>
      </main>
    </>
  );
}

export default FormSizeLogin;
