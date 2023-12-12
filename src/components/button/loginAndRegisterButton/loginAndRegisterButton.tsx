import "./loginAndRegisterButton.css";

function LoginAndRegisterButton({
  content,
  type,
  onClick,
}: {
  content: string;
  type: "loginAndRegisterButtonFull" | "loginAndRegisterButtonEmpty" | "mainButton";
  onClick?: any;
}) {
  return (
    <>
      <button id={type} onClick={onClick}>
        {content}
      </button>
    </>
  );
}

export default LoginAndRegisterButton;
