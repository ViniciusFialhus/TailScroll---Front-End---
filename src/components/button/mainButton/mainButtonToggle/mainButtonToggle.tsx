import arrowDrop from "../../../../assets/arrow_drop_down_fill1_24px.svg";
import "./mainButtonToggle.css";


function MainButtonToggle({ content }: { content: string }) {
  return (
    <>
      <button className="buttonToggle">
        {content}
        <img src={arrowDrop}/>
      </button>
    </>
  );
}

export default MainButtonToggle;
