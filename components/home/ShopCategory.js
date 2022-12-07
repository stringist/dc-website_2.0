import Link from "next/link";
import Image from "next/image";
export default function ShopCategory() {
  return (
    <section id="category">
      <h2>Shop By Category</h2>
      <div className="category-group">
        <div className="category-card">
          <Image src="/../public/images/placeholder_disc.png" alt="Discs" width="100%" height="300px"></Image>
          <Link href="/productList">
            <a>Discs</a>
          </Link>
        </div>
        <div className="category-card">
          <Image src="/../public/images/backpack.png" alt="Bags" width="100%" height="300px"></Image>
          <Link href="/productList">
            <a>Bags</a>
          </Link>
        </div>
        <div className="category-card">
          <Image src="/../public/images/placeholder_hat.png" alt="Accessories" width="100%" height="300px"></Image>
          <Link href="/productList">
            <a>Accessories</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
