import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <title>Disc Connection</title>
        <meta name="description" content="Salg af golf discs og udstyr til disc golf ultimate freestyle DDC guts" />
        <link rel="icon" href="/DC_logo_new.ico" />
      </Head>
      <header>
        <Hero title="Disc Connection" />
      </header>
      <main>
        <h1>Welcome to our Exam Project - 4th Semester</h1>

        <h3>
          Go to <Link href="/productList">product list</Link>
        </h3>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://cocktails-240e.restdb.io/rest/disc-connection", {
    method: "GET",
    headers: { "cache-control": "no-cache", "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e" },
  });
  const data = await req.json();

  if (data)
    return {
      props: { products: data },
    };
}
