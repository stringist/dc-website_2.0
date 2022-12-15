import AboutProfile from "../components/about/AboutProfile";
import Head from "next/head";
import Link from "next/link";
// import { useEffect } from "React";
// import { useRouter } from "next/router";
import Hero from "../components/Hero";
import { BiErrorAlt } from "react-icons/bi";

import styles from "../styles/Stripe.module.scss";
export default function Error404() {
  // const route = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     route.push("/");
  //   }, 2000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      <Head>
        <title>Disc Connection</title>
        <meta name="description" content="Disc Connection" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>{/* <Hero title="About" /> */}</header>

      <section className={styles.section}>
        <BiErrorAlt />

        <h2>Oops, something went wrong!</h2>

        <p>
          Go back to the <Link href="/">home page</Link>
        </p>
      </section>
    </>
  );
}
