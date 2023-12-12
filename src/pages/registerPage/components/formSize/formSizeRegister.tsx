import TextField from "../../../../components/textField/loginAndRegisterTextField/loginAndRegisterTextField";
import LoginAndRegisterButton from "../../../../components/button/loginAndRegisterButton/loginAndRegisterButton";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerUser } from "../../../../services/api";

import "./formSizeRegister.css";
import "../../../../styles/global.css";

function FormSizeRegister() {
  const [checkboxState, setCheckboxState] = useState("password");

  const [errMessage, setErrMessage] = useState("");
  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeInputName = (event: any) => {
    const content = event.target.value;
    setUserForm({
      ...userForm,
      name: content,
    });
  };

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

  const handleClickShowPassword = () => {
    if (checkboxState === "text") {
      setCheckboxState("password");
    } else {
      setCheckboxState("text");
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await registerUser(userForm);
      localStorage.setItem("modalTrue", response ? "true" : "false");
      navigate("/");
    } catch (error: any) {
      console.log(error);

      setErrMessage(error.response.data.error);
      if (rerender) {
        setRerender(false);
      } else {
        setRerender(true);
      }
    }
  };

  useEffect(() => {
    const { name, email, password } = userForm;
    if (!name && errMessage === "Required Credentials") {
      setErrName(true);
      setTimeout(() => {
        setErrName(false);
      }, 1000);
    }
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
    if (errMessage === "User with this email exists") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
      }, 1000);
    }
    if (errMessage === "Invalid email format") {
      setErrEmail(true);
      setTimeout(() => {
        setErrEmail(false);
      }, 1000);
    }
    if (errMessage === "Internal Server Error") {
      setErrName(true);
      setErrEmail(true);
      setErrPassword(true);
      setTimeout(() => {
        setErrName(false);
        setErrEmail(false);
        setErrPassword(false);
      }, 1000);
    }
  }, [rerender, errMessage]);

  return (
    <>
      <main className="formSizeRegister">
        <div className="textSize">
          <h1 className="primaryText">Sign In</h1>
          <h4 className="secundaryText">Use your TailScroll account</h4>
        </div>
        <div className="formSize">
          <div className="input">
            <TextField
              placeholder={"Name"}
              type={"text"}
              onChange={handleChangeInputName}
              error={errName}
              errMessage={errName ? errMessage : ""}
            />
          </div>
          <div className="input">
            <TextField
              placeholder={"E-mail"}
              type={"email"}
              onChange={handleChangeInputEmail}
              error={errEmail}
              errMessage={errEmail ? errMessage : ""}
            />
          </div>
          <div className="input">
            <TextField
              placeholder={"Password"}
              type={checkboxState}
              onChange={handleChangeInputPassword}
              error={errPassword}
              errMessage={errPassword ? errMessage : ""}
            />
          </div>

          <section className="sectionCheckboxPassword">
            <input
              type="checkbox"
              className="checkboxPassword"
              onClick={handleClickShowPassword}
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
        </div>
      </main>
    </>
  );
}

export default FormSizeRegister;
