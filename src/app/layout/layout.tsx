import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import Main from "../Main/main";

function Layout () {
  return (
    <>
      <Header/>
      <Main>
        <Outlet/>
      </Main>
    </>
  );
};

export default Layout;