import "./_sign-up-page.scss";
import BasicHeader from "../../components/header/basicHeader/basic-header";
import StepsText from "../../components/step-text/stepsText";
import Footer from "../../components/footer/footer";
import TickList from "../../components/tick-list/tick-list";
import NextButton from "../../components/button/next-button/next-btn";

function SignUp() {
  const list = [
    "No commitments, cancel anytime.",
    "Endless entertainment for one low price.",
    "Unlimited viewing on all your devices.",
  ];
  return (
    <>
      <BasicHeader
        btn_txt={"sign in"}
        btn_modifiers={"btn--transparent"}
        modifiers="basic-header--white"
      />
      <div className="sign-up-page">
        <main className="sign-up">
          <div className="sign-up__icon-container">
            <span className="sign-up__icon"></span>
          </div>
          <StepsText current={1} max={3} />
          <h1 className="sign-up__title">Choose your plan</h1>
          <TickList listItems={list} />
          <NextButton />
        </main>
      </div>
      <Footer isMinimized={true} modifiers="footer--white" />
    </>
  );
}

export default SignUp;
