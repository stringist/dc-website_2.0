import Link from "next/link";
import FakeProductTile from "./FakeProductTile";

export default function Featured() {
  return (
    <section id="featured">
      <h2>Featured</h2>
      <div className="featured-carousel">
        <FakeProductTile />
        <FakeProductTile />
        <FakeProductTile />
        <FakeProductTile />
      </div>
      <Link href="/productList/Discs">
        <a className="arrow">View all discs</a>
      </Link>
    </section>
  );
}
