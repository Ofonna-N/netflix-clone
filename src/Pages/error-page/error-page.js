import "./_error-page.scss";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <div className="error-page__card">
        <h1 className="error-page__title">Oops!</h1>
        <p className="error-page__error-txt">
          Sorry, an unexpected error has occured.
        </p>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
