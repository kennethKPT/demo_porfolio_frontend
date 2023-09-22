import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

import Header from "../components/Sections/Header";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
