import { useState, useEffect, useCallback, ReactNode } from "react";
import AuthContext from "./auth-context";

type Props = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const initialToken: any = localStorage.getItem("token");
    setToken(initialToken);
  }, []);

  // !! converts a truth or falsy value to a boolean i.e true or false boolean values
  const userIsLoggedIn = !!token;

  const loginHandler = (token: any) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const authContext = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
