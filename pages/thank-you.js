import AboutProfile from "../components/about/AboutProfile";
import Head from "next/head";

import Hero from "../components/Hero";
import { AiFillCheckCircle } from "react-icons/ai";

import styles from "../styles/Stripe.module.scss";
export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you - Disc Connection</title>
        <meta name="description" content="About Disc Connection" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>{/* <Hero title="About" /> */}</header>

      <section className={styles.section}>
        <AiFillCheckCircle />

        <h2>Thank you for your purchase!</h2>
        <p> We got your order and it&apos;s quite gorgeous.</p>
        <p>We&apos;ll send you an email when it ships :)</p>
      </section>
    </>
  );
}
