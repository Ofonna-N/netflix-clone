import NextButton from "../../components/button/next-button/next-btn";
import BasicHeader from "../../components/header/basicHeader/basic-header";
import StepsText from "../../components/step-text/stepsText";
import "./_registration.scss";

function RegistrationPage() {
  return (
    <>
      <BasicHeader
        btn_txt={"sign in"}
        btn_modifiers={"btn--transparent"}
        modifiers="basic-header--white"
      />
      <div className="registration-page">
        <div className="registration-container">
          <div className="registration-container__icon-container"></div>
          <StepsText current={2} max={3} />
          <h1 className="registration-container__title">
            Finish setting up your account
          </h1>
          <div className="registration-container__text">
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </div>
          <NextButton />
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
