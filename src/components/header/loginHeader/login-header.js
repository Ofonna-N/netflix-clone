import { useEffect, useState } from "react";
import Button from "../../button/button";
import NetflixLogo from "../../icons/netflix-logo";
import "./_login-header.scss";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux-store/userSlice";

function LoginHeader() {
  const [scrolled, setScrolled] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleScroll = () => {
      //   console.log(window.scrollY);
      if (window.scrollY > 199) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoutHandler = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      dispatch(clearUser());
      console.log("signed out");
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className={`login-header ${scrolled ? "scrolled" : ""}`}>
      <span>
        <NetflixLogo className={"login-header__logo"} fill={"#e50914"} />
      </span>
      <span className="login-header__profile-icon">
        <img
          src="https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnOnMxhb19v9lQZScL86ZpnI21__HC3fseri3xG_4k-rYBafycfVvfsw_SqXVYXJJrelgRPF-eed5E69w1GQ3rq-CxZLW0.png?r=a4b"
          alt=""
        />

        <div className={`login-header__logout-menu`}>
          <Button
            content={"Sign Out"}
            modifiers={"btn--transparent"}
            clickEvent={logoutHandler}
          />
        </div>
      </span>
    </header>
  );
}

export default LoginHeader;
