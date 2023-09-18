import RootErrorBoundary from "components/organisms/Common/RootErrorBoundary";
import MinimalLayout from "components/templates/MinimalLayout";
import { Homepage } from "pages";

/**
 * @type {import("react-router-dom").RouteObject[]}
 */
const Router = [
  {
    path: "/",
    element: <MinimalLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
    errorElement: <RootErrorBoundary />,
  },
];

export default Router;
