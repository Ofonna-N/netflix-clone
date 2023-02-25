import "./_get-started-form.scss";
import Button from "../button/button";
import { useRef, useState } from "react";

function GetStartedForm() {
  const inputRef = useRef();
  const [hasText, setHasText] = useState(false);

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
        />
      </div>
    </form>
  );
}

export default GetStartedForm;
