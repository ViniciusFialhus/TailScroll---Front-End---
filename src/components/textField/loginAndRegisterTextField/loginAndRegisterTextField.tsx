import "./loginAndRegisterTextField.css";
import errorIcon from '../../../assets/errorIcon.svg'

function LoginAndRegisterTextField({
  placeholder,
  type,
  error,
  errMessage,
  onChange,

}: {
  placeholder: string;
  type: string;
  error?: boolean,
  errMessage?: string,
  onChange?: any,
}) {
  return (
    <>
      <input type={type} placeholder={placeholder} className={error ? "error" : "notError"} onChange={onChange}/>
      <section className={error ? 'errorMessage' : "notErrorMessage"}>
        <img src={errorIcon}/>
        <label>{errMessage}</label>
      </section>
    </>
  );
}

export default LoginAndRegisterTextField;
