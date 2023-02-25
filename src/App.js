import "./main.scss";
import HomePage from "./Pages/home-page/home-page";
import LoginPage from "./Pages/login-page/login-page";
import PlanFormPage from "./Pages/planform-page/planform-page";
import RegistrationForm from "./Pages/registration-form/registration-form";
import RegistrationPage from "./Pages/registration-page/registration-page";
import SignUp from "./Pages/sign-up-page/sign-up-page";

function App() {
  return (
    <>
      <HomePage />
      <SignUp />
      <PlanFormPage />
      <RegistrationPage />
      <RegistrationForm />
      <LoginPage />
    </>
  );
}

export default App;
