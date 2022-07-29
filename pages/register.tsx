import { gql, useMutation } from "@apollo/client";
import type { NextPage } from "next";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { rootCertificates } from "tls";

const CreateUserMutation = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      user {
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`;

const Register: NextPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createUser, { data, loading, error }] = useMutation(
    CreateUserMutation,
    {
      onCompleted: () => reset(),
    }
  );

  const onSubmit = async (data: any) => {
    const { firstName, lastName, email, password } = data;
    const variables = { firstName, lastName, email, password };
    try {
      toast.promise(createUser({ variables }), {
        loading: "Creating new user..",
        success: "User successfully created!🎉",
        error: `Something went wrong 😥 Please try again -  ${error?.message}`,
      });
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };

  if (data) router.replace("./");

  return (
    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="register ">
        <Toaster />
        <div className="pt-10">
          <p className="text-3xl font-semibold text-brightOrange">Register</p>
          <input
            type="text"
            placeholder="first name"
            {...register("firstName", { required: true })}
            className="register-input mt-14"
          />
          <input
            className="register-input"
            type="lastName"
            placeholder="last name"
            {...register("lastName", { required: true })}
          />
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
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
                Registering...
              </span>
            ) : (
              <span>Register</span>
            )}
          </button>
          <div className="text-xl">
            <p>Already have account?</p>
            <div className="underline font-bold text-brightRed">
              <Link href="./login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
