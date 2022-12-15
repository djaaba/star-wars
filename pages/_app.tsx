import type { AppProps } from "next/app";
import Head from 'next/head';
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import "@fontsource/roboto";

import { Layout } from '../Layout/index';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: "Roboto";
    background: url('https://i.pinimg.com/564x/4a/a9/9b/4aa99b6ad2d2cbc7cb04a41571885a8f.jpg')
  }
  :root{
    --white: #fff;
    --light-gray: #D3D3D3;
    --gray: #333;
    --black: #000;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Nebo-Team</title>
        <link rel="icon" href="/nebo.ico" />
        <meta property='og:locale' content='ru_RU'/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;