import type { NextPage } from "next";
import Link from "next/link";

const MainNavigation: NextPage = () => {
  return (
    <header className=" h-16 flex items-center justify-center mb-12">
      <div className="container flex items-center justify-between mx-auto">
        <div className="font-bold text-brightOrange">
          <Link href="./">JE Flashcards</Link>
        </div>
        <nav>
          <div className="flex items-center justify-between space-x-6">
            <div className="capitalize">
              <Link href="/login">login </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
