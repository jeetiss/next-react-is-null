import Head from "next/head";
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log("wow");
  }, []);

  return (
    <>
      <Head>
        <title>Hello pages</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
