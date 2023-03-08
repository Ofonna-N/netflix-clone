import "./_get-started-form.scss";
import Button from "../button/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux-store/userSlice";

function GetStartedForm() {
  const inputRef = useRef();
  const [hasText, setHasText] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const userSlice = useSelector((state) => state.user);

  useEffect(() => {
    // console.log(userSlice.user);
    if (userSlice.user) {
      inputRef.current.value = userSlice.user.email;
      setHasText(true);
    }
  }, []);

  const setEmailHandler = (e) => {
    e.preventDefault();

    if (hasText) {
      dispatch(setUser({ email: inputRef.current.value }));
    }

    nav("signup/regform");
  };

  return (
    <form className="get-started-form">
      <h3 className="get-started-form__title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="get-started-form__cta">
        <div className="get-started-form__input-container">
          <input
            ref={inputRef}
            className={`get-started-form__input ${hasText ? "has-text" : ""}`}
            typeof="email"
            onChange={() => {
              setHasText(inputRef.current.value.trim().length > 0);
            }}
            onMouseLeave={() => {
              setHasText(inputRef.current.value.trim().length > 0);
            }}
          />
          <label className="get-started-form__label">Email address</label>
        </div>
        <Button
          content={"get started"}
          modifiers="btn--primary btn--get-started"
          hasIcon={true}
          clickEvent={setEmailHandler}
        />
      </div>
    </form>
  );
}

export default GetStartedForm;
