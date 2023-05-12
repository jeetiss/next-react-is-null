import Head from "next/head";
import { Providers } from "@/components/providers";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Hello pages</title>
      </Head>

      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
};

export default App;
