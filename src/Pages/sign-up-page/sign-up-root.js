import { Outlet } from "react-router-dom";
import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import BasicHeader from "../../components/header/basicHeader/basic-header";

function SignUpRoot() {
  return (
    <>
      <BasicHeader
        modifiers="basic-header--white"
        btn={
          <Button
            content={"sign in"}
            modifiers={"btn--transparent"}
            navPage={"/login"}
          />
        }
      />
      <Outlet />
      <Footer modifiers={"footer--white"} isMinimized={true} />
    </>
  );
}

export default SignUpRoot;
