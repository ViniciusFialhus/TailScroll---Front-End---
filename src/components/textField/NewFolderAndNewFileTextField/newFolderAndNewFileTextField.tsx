import "./newFolderAndNewFileTextField.css";
import errorIcon from '../../../assets/errorIcon.svg'

function NewFolderAndNewFileTextField({
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
      <input type={type} placeholder={placeholder} className={error ? "errorNewFolderAndNewFileTextField" : "notErrorNewFolderAndNewFileTextFieldndRegister"} onChange={onChange}/>
      <section className={error ? 'errorMessageNewFolderAndNewFileTextField' : "notErrorNewFolderAndNewFileTextField"}>
        <img src={errorIcon}/>
        <label>{errMessage}</label>
      </section>
    </>
  );
}

export default NewFolderAndNewFileTextField;
