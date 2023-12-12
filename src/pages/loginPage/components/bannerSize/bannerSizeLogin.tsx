import LoginAndRegisterButton from "../../../../components/button/loginAndRegisterButton/loginAndRegisterButton";
import "./bannerSizeLogin.css";
import "../../../../styles/global.css";

import { useNavigate } from "react-router-dom";

function BannerSizeLogin() {
  const navigate = useNavigate();

  return (
    <>
      <main className="containerBannerLogin">
        <section className="textSection">
          <h1>Hello, player!</h1>
          <h2>register to have access to the site's features</h2>
          <div className="containerPersonButton">
            <LoginAndRegisterButton
              content="SING UP"
              type="loginAndRegisterButtonEmpty"
              onClick={() => navigate("/register")}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default BannerSizeLogin;
