import {} from "react";
import Head from "next/head";

export default function HeadTag() {
  return (
    <Head>
      <title>Ugwu Chiagozie Stanley</title>

      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/stan-1.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a192f" />
      {/* <!-- Windows Phone --> */}
      <meta name="msapplication-navbutton-color" content="#0a192f" />
      {/* <!-- iOS Safari --> */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0a192f" />

      <link rel="apple-touch-icon" href="%PUBLIC_URL%/stan-1.svg" />

      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <link rel="icon" href="/stan-1.svg" />

      <meta
        name="description"
        content={`Frontend Developer: Torche`}
      />
      <meta
        name="image"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />
      <meta name="keywords" content="Ugwu chiagozie stanley" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta property="og:title" content={`Ugwu Stanley`} />
      <meta
        property="og:description"
        content={`Ugwu Stanley's portfolio website`}
      />
      <meta
        property="og:image"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />
      <meta property="og:url" content={`https://stanlee-x.netlify.app/`} />
      <meta property="og:type" content="website" />

      <meta
        name="twitter:card"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />
      <meta name="twitter:creator" content={`chiagozie_ugwu`} />
      <meta name="twitter:title" content={`Ugwu Stanley`} />
      <meta
        name="twitter:description"
        content={`Ugwu Stanley's portfolio website`}
      />
      <meta
        name="twitter:image"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
