import "./main.scss";
import HomePage from "./Pages/home-page/home-page";
import LoginPage from "./Pages/login-page/login-page";
import PlanFormPage from "./Pages/planform-page/planform-page";
import RegistrationPage from "./Pages/registration-page/registration-page";
import SignUp from "./Pages/sign-up-page/sign-up-page";
import RegistrationForm from "./Pages/registration-form/registration-form";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/error-page/error-page";
import SignUpRoot from "./Pages/sign-up-page/sign-up-root";
import BrowsePage from "./Pages/browse-page/browse-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUpRoot />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: "planform",
        element: <PlanFormPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "regform",
        element: <RegistrationForm />,
      },
    ],
  },

  {
    path: "login",
    element: <LoginPage />,
  },
]);

const testRoute = createBrowserRouter([
  {
    path: "/",
    element: <BrowsePage />,
  },
]);

function App() {
  return <RouterProvider router={testRoute} />;
}

export default App;
