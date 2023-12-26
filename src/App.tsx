import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import MainPage from "./pages/mainPage/mainPage";

export const App = () => {
  const [modalCreateAccount, setModalCreateAccount] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              modalCreateAccount={modalCreateAccount}
              setModalCreateAccount={setModalCreateAccount}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage setCheckedCreateAccount={setModalCreateAccount} />
          }
        />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};
