import "./mainButtonAdd.css";


function MainButtonAdd({ content }: { content: string }) {
  return (
    <>
      <button className="buttonAdd">
        <h1>+</h1>
        {content}
      </button>
    </>
  );
}

export default MainButtonAdd;
