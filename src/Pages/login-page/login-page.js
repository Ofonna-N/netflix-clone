import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import BasicHeader from "../../components/header/basicHeader/basic-header";
import TextInput from "../../components/text-input-form/text-input";
import { setUser } from "../../redux-store/userSlice";
import "./_login-page.scss";

function LoginPage() {
  const [showError, setShowError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const userSlice = useSelector((state) => state.user);
  // console.log(userSlice);
  useEffect(() => {
    if (userSlice.user) {
      emailRef.current.value = userSlice.user.email;
    }
  }, []);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({ email: userCred.email }));
      nav("/browse");
    } catch (error) {
      console.log(error.message);
      setShowError(true);
    }
  };

  return (
    <div className="login-page">
      <BasicHeader modifiers={"basic-header--white"} />
      <form className="login-form">
        <h1 className="login-form__title">Sign In</h1>
        <div className="login-form__inputs">
          <TextInput
            ref={emailRef}
            inputType="text"
            inputLabel="email or phone number"
            hasDefault={userSlice.user}
          />
          <TextInput
            ref={passwordRef}
            inputType="password"
            inputLabel="Password"
          />
          <p className={`login-form__error-msg ${showError ? "active" : ""}`}>
            Wrong Email or password!
          </p>
        </div>
        <Button
          content={"sign in"}
          modifiers="btn--primary"
          clickEvent={signIn}
        />

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
