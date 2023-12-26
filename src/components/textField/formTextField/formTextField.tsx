import "../../../styles/global.css";
import "./formTextField.css";

function FormTextField({
  label,
  type,
  onChange,
  error,
  errMessage,
}: {
  label?: string;
  type?: string;
  onChange?:any
  error?: boolean;
  errMessage?: string;
}) {  
  return (
    <>
      <main className="containerTextField">
        <div className="inputAdjust">
          <input
            type={type}
            className={error ? "inputBaseError" : "inputBase"}
            placeholder=""
            onChange={onChange}
          />
          <label className={error ? "labelInputError" : "labelInput"}>
            {label}
          </label>
        </div>
        <section className="errorAdjuste">
          <div className={error ? "containerError" : 'container'}>
            <span className="material-symbols-outlined">error</span>
            <h6 className="errorMessage">{errMessage}</h6>
          </div>
        </section>
      </main>
    </>
  );
}

export default FormTextField;
