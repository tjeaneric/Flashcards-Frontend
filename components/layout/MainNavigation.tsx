import type { NextPage } from "next";
import Link from "next/link";

const MainNavigation: NextPage = () => {
  return (
    <header className=" h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between mx-auto">
        <div className="font-bold text-3xl text-brightOrange">
          <Link href="./">JE Flashcards</Link>
        </div>
        <nav>
          <div className="flex items-center justify-between space-x-6">
            <div className="capitalize font-semibold rounded-full text-xl bg-brightRed p-3 px-10 py-2 text-white hover:bg-brightRedLight ">
              <Link href="/login">login </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
