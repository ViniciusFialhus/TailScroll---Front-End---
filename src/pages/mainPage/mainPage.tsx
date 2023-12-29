import "../../styles/global.css";
import TopSize from "./components/topSize/topSize";
import MainSize from "./components/mainSize/mainSize";
import "./mainPage.css";
import LeftSize from "./components/leftSize/leftSize";


function MainPage() {
  return (
    <>
      <main className="containerMain">
        <TopSize/>
        <LeftSize/>
        <MainSize/>
      </main>
    </>
  );
}

export default MainPage;
