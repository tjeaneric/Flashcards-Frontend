import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { CardItem } from "../components/cards/CardItem";

let skip: number = 1;

const cardData = gql`
query {
   cards(take: 1, skip: ${skip}) {
     count
     cards {
       id
       name
       description
     }
   }
 }
`;

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(cardData);
  if (!loading) console.log(data.cards);

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards Nextjs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CardItem cards={data.cards} onSkip={skip} />
      )}
    </div>
  );
};

export default Home;
