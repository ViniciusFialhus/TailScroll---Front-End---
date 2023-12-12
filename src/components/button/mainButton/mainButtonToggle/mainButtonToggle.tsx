import toggleIcon from '../../../../assets/toggleIconBlack.png'
import "./mainButtonToggle.css";


function MainButtonToggle({ content }: { content: string }) {
  return (
    <>
      <button className="buttonToggle">
        {content}
        <img src={toggleIcon}/>
      </button>
    </>
  );
}

export default MainButtonToggle;
