import type { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <form action="#" method="POST">
      <div className="login ">
        <div className="pt-10">
          <p className="text-3xl font-semibold text-brightOrange">Login</p>
          <input
            className="login-input mt-16"
            type="email"
            name="email"
            placeholder="Email or Phone number"
            required
          />

          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="btn login-btn font-semibold bg-brightRed hover:bg-brightOrange rounded-full"
          >
            Login
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
  );
};

export default Login;
