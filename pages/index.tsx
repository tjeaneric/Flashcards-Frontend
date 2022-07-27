import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards Nextjs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-3xl text-red-600 ">
          <h1>Hello Flashcards</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
