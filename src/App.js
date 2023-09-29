import React from "react";
import Header from "./components/Header";
import { GlobalStyle } from "./Globalstyle";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Orders from "./components/Orders";
import Cart from "./components/Cart";
import Analytics from "./components/Analytics";
import Store from "./components/Store";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./Utlis/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </Provider>
  );
};

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Orders />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);

export default AppLayout;
