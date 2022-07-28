import type { NextPage } from "next";
import Head from "next/head";
import { CardItem } from "../components/cards/CardItem";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards Nextjs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <CardItem />
      </main>
    </div>
  );
};

export default Home;
