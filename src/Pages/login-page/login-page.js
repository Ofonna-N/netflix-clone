import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import BasicHeader from "../../components/header/basicHeader/basic-header";
import TextInput from "../../components/text-input-form/text-input";
import "./_login-page.scss";

function LoginPage() {
  return (
    <div className="login-page">
      <BasicHeader modifiers={"basic-header--white"} />
      <form className="login-form">
        <h1 className="login-form__title">Sign In</h1>
        <div className="login-form__inputs">
          <TextInput inputType="text" inputLabel="email or phone number" />
          <TextInput inputType="password" inputLabel="Password" />
        </div>
        <Button content={"sign in"} modifiers="btn--primary" />

        <div className="login-form__help">
          <span className="checkbox">
            <input type="checkbox" />
            Remember me
          </span>
          <span>Need help?</span>
        </div>
        <div className="login-form__signup-now">
          New to Netflix? <a href="http://">Sign up now</a>
        </div>
        <div className="login-form__learn-more">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="http://">Learn more.</a>
        </div>
      </form>
      <Footer isMinimized={true} modifiers="footer--white" />
    </div>
  );
}

export default LoginPage;
