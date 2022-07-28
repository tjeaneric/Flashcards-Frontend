import type { NextPage } from "next";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <form action="#" method="POST">
      <div className="register ">
        <div className="pt-10">
          <p className="text-3xl font-semibold text-brightOrange">Register</p>
          <input
            className="register-input mt-14"
            type="firstName"
            name="firstName"
            placeholder="first name"
            required
          />
          <input
            className="register-input"
            type="lastName"
            name="lastName"
            placeholder="last name"
            required
          />
          <input
            className="register-input"
            type="email"
            name="email"
            placeholder="Email or Phone number"
            required
          />
          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="btn login-btn font-semibold bg-brightRed hover:bg-brightOrange rounded-full"
          >
            Register
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
