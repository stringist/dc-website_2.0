import Nav from "./nav";
import Footer from "./Footer";
import MobileNav from "./mobileMenu/MobileNav";

export default function Layout({ children }, { products }) {
  console.log("layout", products);

  return (
    <>
      <MobileNav />
      {/* <Nav products={products} /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
