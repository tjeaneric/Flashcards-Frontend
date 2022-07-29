import { gql, useMutation } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import AuthContext from "../store/auth-context";

const LoginMutation = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`;

const Login: NextPage = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loginUser, { data, loading, error }] = useMutation(LoginMutation, {
    onCompleted: () => reset(),
  });
  if (data) {
    const { login } = data;
    authCtx.login(login.token);
  }

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    const variables = { email, password };
    try {
      toast.promise(loginUser({ variables }), {
        loading: "Logging in user...",
        success: "User logged in successfully!🎉",
        error: `Something went wrong 😥 Please try again -  ${error?.message}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (data) router.push("./");

  return (
    <Fragment>
      <>
        {!isLoggedIn && (
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="login ">
              <Toaster />
              <div className="pt-10">
                <p className="text-3xl font-semibold text-brightOrange">
                  Login
                </p>
                <input
                  className="login-input mt-16"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email "
                />

                <input
                  className="login-input"
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
                      Logging in...
                    </span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
                <div className="text-xl">
                  <p>Don&apos;t have an account?</p>
                  <div className="underline font-bold text-brightRed">
                    <Link href="./register"> Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
        {isLoggedIn && router.replace("./")}
      </>
    </Fragment>
  );
};

export default Login;
