import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import { gql, useQuery } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";

const allCards = gql`
  query {
    cards {
      cards {
        name
        description
        createdBy {
          firstName
        }
      }
    }
  }
`;

const CreateCard: NextPage = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.replace("./login");
  }, [isLoggedIn, router]);

  const { data, loading, error } = useQuery(allCards);
  let cards;
  if (data) {
    cards = data.cards.cards;
  }

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-32 flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-4 text-brightOrange font-bold">
            All Cards
          </h1>
          <table>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
            {cards.map((card: any) => (
              <tr key={card.id} className="text-xl">
                <td>{card.name}</td>
                <td>{card.description}</td>
                <td>{card.createdBy.firstName}</td>
                <td className="flex items-center justify-around">
                  <button className="text-green-800 hover:underline">
                    update
                  </button>
                  <button className="text-red-600 hover:underline">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default CreateCard;
