import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import apolloClient from "../lib/apollo";
import { ApolloProvider } from "@apollo/client";
import AuthContextProvider from "../store/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
