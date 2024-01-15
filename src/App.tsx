import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import MainPage from "./pages/mainPage/mainPage";

export const App = () => {
  const [modalCreateAccount, setModalCreateAccount] = useState(false);
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/main" />
            ) : (
              <LoginPage
                modalCreateAccount={modalCreateAccount}
                setModalCreateAccount={setModalCreateAccount}
              />
            )
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage setCheckedCreateAccount={setModalCreateAccount} />
          }
        />
        <Route
          path="/main"
          element={token ? <MainPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};
