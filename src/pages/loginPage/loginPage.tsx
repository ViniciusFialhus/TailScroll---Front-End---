import FormSizeLogin from "./components/formSize/formSizeLogin";
import BannerSizeLogin from "./components/bannerSize/bannerSizeLogin";
import "../../styles/global.css";
import "./loginPage.css";


function LoginPage() {
  return (
    <>
      <main className="containerLogin">
        <FormSizeLogin />
        <BannerSizeLogin />
      </main>
    </>
  );
}

export default LoginPage;
