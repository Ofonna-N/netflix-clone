import "./_get-started-form.scss";
import Button from "../button/button";

function GetStartedForm() {
  return (
    <form className="get-started-form">
      <h3 className="get-started-form__title">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="get-started-form__cta">
        <div className="get-started-form__input-container">
          <input className="get-started-form__input" typeof="email" />
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
