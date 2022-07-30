import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import { gql, useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Link from "next/link";

const CreateCardMutation = gql`
  mutation ($name: String!, $description: String!) {
    postCard(name: $name, description: $description) {
      name
      description
      createdBy {
        id
        email
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createCard, { data, loading, error }] = useMutation(
    CreateCardMutation,
    {
      onCompleted: () => reset(),
    }
  );

  if (data) console.log(data);

  const onSubmit = async (data: any) => {
    const { name, description } = data;
    const variables = { name, description };
    console.log(data);
    try {
      toast.promise(createCard({ variables }), {
        loading: "Creating card...",
        success: "Card created successfully!🎉",
        error: `Something went wrong 😥 Please try again -  ${error?.message}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      {isLoggedIn && (
        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="login ">
            <Toaster />
            <div className="pt-10">
              <p className="text-3xl font-semibold text-brightOrange">
                Create your card
              </p>
              <input
                className="login-input mt-16"
                type="text"
                {...register("name", { required: true })}
                placeholder="Name "
                required
              />

              <input
                className="login-input"
                type="text"
                placeholder="Description"
                {...register("description", { required: true })}
                required
              />
              <button
                disabled={loading}
                type="submit"
                className="btn login-btn font-semibold bg-brightRed hover:bg-brightOrange rounded-full"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-6 h-6 animate-spin mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    Creating card...
                  </span>
                ) : (
                  <span>Create</span>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default CreateCard;
