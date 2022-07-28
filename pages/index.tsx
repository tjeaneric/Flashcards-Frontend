import type { NextPage } from "next";
import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { CardItem } from "../components/cards/CardItem";

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://flashcards-graphql-api.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  let skip: number = 0;

  const { data } = await client.query({
    query: gql`
      {
        cards(take: 1, skip: ${skip}) {
          cards {
            id
            name
            description
          }
        }
      }
    `,
  });

  return {
    props: {
      cards: data.cards.cards,
    },
  };
};

const Home: NextPage = ({ cards }: any) => {
  return (
    <div>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Flashcards Nextjs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardItem cards={cards} />
    </div>
  );
};

export default Home;
