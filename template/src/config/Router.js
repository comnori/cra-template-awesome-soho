import RootErrorBoundary from "components/organisms/Common/RootErrorBoundary";
import MinimalLayout from "components/templates/MinimalLayout";
import { Homepage, Login } from "pages";

/**
 * @type {import("react-router-dom").RouteObject[]}
 *
 * id 항목은 반드시 MenuItems.js 의 key 와 동일하게 설정하세요
 * root router에는 id에 root 가 포함되야 합니다.
 */
const Router = [
  {
    id: "root",
    path: "/",
    element: <MinimalLayout />,
    children: [
      {
        id: "Home",
        index: true,
        element: <Homepage />,
      },
      {
        id: "Login",
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <RootErrorBoundary />,
  },
];

export default Router;
