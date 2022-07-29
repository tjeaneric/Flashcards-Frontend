import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";

const CreateCard: NextPage = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.replace("./login");
  }, [isLoggedIn, router]);

  return <Fragment>{isLoggedIn && <div>Create card</div>}</Fragment>;
};

export default CreateCard;
