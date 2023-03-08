import { useEffect, useRef, useState } from "react";
import NextButton from "../../components/button/next-button/next-btn";
import StepsText from "../../components/step-text/stepsText";
import TextInput from "../../components/text-input-form/text-input";
import "./_registration-form.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux-store/userSlice";

function RegistrationForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const dispach = useDispatch();
  const userSlice = useSelector((state) => state.user);
  useEffect(() => {
    if (userSlice.user) {
      emailRef.current.value = userSlice.user.email;
    }
  }, []);

  const signInNewUser_Handler = (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    if (email.trim().length < 1) {
      console.log("Enter email");
      return;
    }
    if (password.trim().length < 6) {
      setShowError("Password must be over 6 characters");
      return;
    }

    const signIn = async () => {
      try {
        const auth = getAuth();
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (user) {
          dispach(setUser({ email, isLoggedIn: true }));
          navigate("/browse");
          // console.log(user);
        }
        email = "";
        password = "";
        // console.log(user);
      } catch (err) {
        // console.log(err);
        console.log(err.code);
        if (err.code === "auth/email-already-in-use") {
          setShowError("This email has already been taken, try another email");
        } else {
          setShowError("Enter valid email or password!");
        }
      }
    };

    signIn();
  };

  return (
    <>
      <div className="registration-form">
        <div className="registration-form__head">
          <StepsText current={2} max={3} />
          <h1 className="registration-form__title">
            Create a password to start your membership
          </h1>
          <div className="registration-form__text-row">
            Just a few more steps and you're done!
          </div>
          <div className="registration-form__text-row">
            We hate paperwork, too.
          </div>
        </div>
        <form>
          <TextInput
            inputType="email"
            inputLabel="Email"
            id={"email"}
            ref={emailRef}
            hasDefault={userSlice.user}
          />
          <TextInput
            inputType="password"
            inputLabel="Add a password"
            id={"password"}
            ref={passwordRef}
          />
          {showError && (
            <p className="registration-form__Error-message">{showError}</p>
          )}
          <NextButton clickEvent={signInNewUser_Handler} />
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
