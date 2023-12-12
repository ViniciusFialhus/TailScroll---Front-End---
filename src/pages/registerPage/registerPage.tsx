import FormSizeRegister from "../registerPage/components/formSize/formSizeRegister";
import BannerSizeRegister from "../registerPage/components/bannerSize/bannerSizeRegister";
import "../../styles/global.css";
import "./registerPage.css";

function RegisterPage() {
  return (
    <>
      <main className="containerRegister">
        <BannerSizeRegister />
        <FormSizeRegister />
      </main>
    </>
  );
}

export default RegisterPage;
