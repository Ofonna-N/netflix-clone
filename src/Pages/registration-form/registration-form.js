import Button from "../../components/button/button";
import NextButton from "../../components/button/next-button/next-btn";
import Footer from "../../components/footer/footer";
import BasicHeader from "../../components/header/basicHeader/basic-header";
import StepsText from "../../components/step-text/stepsText";
import TextInput from "../../components/text-input-form/text-input";
import "./_registration-form.scss";

function RegistrationForm() {
  return (
    <>
      <div className="registration-form">
        <div className="registration-form__head">
          <StepsText current={2} max={3} />
          <h1 className="registration-form__title">
            Create a password too start your membership
          </h1>
          <div className="registration-form__text-row">
            Just a few more steps and you're done!
          </div>
          <div className="registration-form__text-row">
            We hate paperwork, too.
          </div>
        </div>
        <form>
          <TextInput inputType="email" inputLabel="Email" />
          <TextInput inputType="password" inputLabel="Add a password" />
        </form>
        <NextButton />
      </div>
    </>
  );
}

export default RegistrationForm;
