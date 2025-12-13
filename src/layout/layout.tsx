import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import Main from "../components/Main/main";

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