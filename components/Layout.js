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
