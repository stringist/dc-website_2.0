import Link from "next/link";
import Image from "next/image";

import placeholder from "../../public/images/image4.jpg";

export default function FakeProductTile() {
  return (
    <Link href={`/product/1`}>
      <div className="product-tile">
        <Image
          src={placeholder}
          alt={"some frisbee"}
          width={200}
          height={200}
          layout="responsive"
          placeholder="blur"
          blurDataURL="/placeholder.png"
        ></Image>

        <div className="flight-score">
          <p>6</p>
          <p>6</p>
          <p>6</p>
          <p>6</p>
        </div>

        <p>
          {"Latitude64"} - {"Latitude64"}
        </p>
        <h3>some disc</h3>
        <p className="price">
          <span>666</span> dkk
        </p>
      </div>
    </Link>
  );
}
