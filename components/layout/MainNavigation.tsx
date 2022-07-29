import type { NextPage } from "next";
import { useContext } from "react";
import Link from "next/link";
import AuthContext from "../../store/auth-context";

const MainNavigation: NextPage = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => authCtx.logout();

  return (
    <header className=" h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between mx-auto">
        <div className="font-bold text-3xl text-brightOrange">
          <Link href="./">JE Flashcards</Link>
        </div>
        <nav>
          <div className="flex items-center justify-between space-x-12">
            {isLoggedIn && (
              <>
                <div className="capitalize font-semibold rounded-md text-xl bg-brightRed p-3 px-10 py-2 text-white hover:bg-brightRedLight ">
                  <Link href="/create-card">Create cards</Link>
                </div>
                <div
                  onClick={logoutHandler}
                  className="capitalize font-semibold rounded-full text-xl bg-brightRed p-3 px-10 py-2 text-white hover:bg-brightRedLight "
                >
                  <Link href="./">logout </Link>
                </div>
              </>
            )}
            {!isLoggedIn && (
              <div className="capitalize font-semibold rounded-full text-xl bg-brightRed p-3 px-10 py-2 text-white hover:bg-brightRedLight ">
                <Link href="/login">login </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
