import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const SEO = ({ title = "PC Link", description = "Debit Card", image = "/vercel.svg" }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={router.pathname} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} key="ogimage" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:url" content={image} />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:image:alt" content="PC Link" />
      <meta property="og:image:width" content="50" />
      <meta property="og:image:height" content="50" />
      <meta property="og:locale" content="en_IE" />

      <link rel="icon" type="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
