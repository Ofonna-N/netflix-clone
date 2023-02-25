import "./_hero.scss";

import Button from "../button/button";
import GetStartedForm from "../get-started-form/get-started-form";
import BasicHeader from "../header/basicHeader/basic-header";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__img">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/7a0bd648-8238-4134-b486-e7ff5cbaa56e/US-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      {/* <div className="hero__header">
        <NetflixLogo className={"hero__logo"} fill={"#e50914"} />
        <Button content={"sign in"} modifiers={"btn--primary"} />
      </div> */}
      <BasicHeader
        btn={<Button content={"sign in"} modifiers={"btn--primary"} />}
      />

      <div className="hero__card">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        {/* <h3 className="hero__form-title">
          Ready to watch? Enter your email to create or restart your membership.
        </h3> */}
        <GetStartedForm />
      </div>
    </div>
  );
}

export default Hero;
