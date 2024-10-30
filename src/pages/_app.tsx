import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import RootLayout from './RootLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Laje da Otonokizaka</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/1093626949814997043/1178395724220735609/renrap.png?ex=67231dca&is=6721cc4a&hm=14a35f15112d007c0d1af47485c6243deea0ac2f1d45ba5bf79c9bf1656f2048&" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;