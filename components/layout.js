import Nav from "./nav";
import Footer from "./Footer";

export default function Layout({ children }, { products }) {
  console.log("layout", products);

  return (
    <>
      <Nav products={products} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://cocktails-240e.restdb.io/rest/disc-connection", {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e",
    },
  });
  const data = await req.json();

  if (data)
    return {
      props: { products: data },
    };
}
