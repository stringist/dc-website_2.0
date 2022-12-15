import { useRouter } from "next/router";
import Products from "../../components/Products";
import Head from "next/head";

export default function CategoryPage({ products }) {
  const router = useRouter();
  const category = router.query.category;

  return (
    <>
      <Head>
        <title>{`Shop ${category}`}</title>
        <meta name="description" content={`See our selection of ${category}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/DC_logo_new.ico" />
      </Head>
      <Products category={category} products={products}></Products>
    </>
  );
}

export async function getStaticPaths() {
  const req = await fetch("https://cocktails-240e.restdb.io/rest/disc-connection", {
    method: "GET",
    headers: { "cache-control": "no-cache", "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e" },
  });
  const data = await req.json();

  const paths = data.map((product) => {
    return {
      params: { category: product.category.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const req = await fetch("https://cocktails-240e.restdb.io/rest/disc-connection", {
    method: "GET",
    headers: { "cache-control": "no-cache", "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e" },
  });

  return {
    props: { products: await req.json() },
  };
}
