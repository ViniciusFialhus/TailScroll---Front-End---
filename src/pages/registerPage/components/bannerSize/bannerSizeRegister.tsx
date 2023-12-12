import LoginAndRegisterButton from "../../../../components/button/loginAndRegisterButton/loginAndRegisterButton";
import "./bannerSizeRegister.css";
import "../../../../styles/global.css";
import { useNavigate } from "react-router-dom";

function BannerSizeRegister() {
  const navigate = useNavigate();

  return (
    <>
      <main className="containerBannerRegister">
        <section className="textSection">
          <h1>Welcome Back!</h1>
          <h2>Enter your personal details to use all of site features</h2>
          <div className="containerPersonButton">
            <LoginAndRegisterButton
              content="SING IN"
              type="loginAndRegisterButtonEmpty"
              onClick={() => navigate("/")}
            />
          </div>
        </section> 
      </main>
    </>
  );
}

export default BannerSizeRegister;
