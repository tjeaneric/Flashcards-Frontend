import { ReactElement } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props: { children: ReactElement }) => {
  return (
    <div>
      <MainNavigation />
      <main className="">{props.children}</main>
    </div>
  );
};

export default Layout;
