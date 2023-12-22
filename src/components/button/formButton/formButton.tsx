
import "../../../styles/global.css";
import "./formButton.css";


function FormButton({content, empty, onClick}: {content:string, empty?:boolean, onClick?:any}) {
  return (
    <>
    <button className={empty ? 'buttonBaseEmpty' : 'buttonBaseFill'} onClick={onClick}>
        {content}
    </button>
    </>
  );
}

export default FormButton;
