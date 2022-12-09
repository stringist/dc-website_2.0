import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

import placeholder from "../../public/images/image4.jpg";

export default function FakeProductTile() {
  return (
    <Link href={`/product/1`}>
      <div className={styles.productTile}>
        <Image
          src={placeholder}
          alt={"some frisbee"}
          width={200}
          height={200}
          layout="responsive"
          placeholder="blur"
          blurDataURL="/placeholder.png"
        ></Image>

        <div className={styles.flightScore}>
          <p>6</p>
          <p>6</p>
          <p>6</p>
          <p>6</p>
        </div>

        <p>
          <span className={styles.bold}>{"Latitude64"}</span> - {"OptoFine"}
        </p>
        <h3>Sick Disc</h3>
        <p className="price">
          <span>666</span> dkk
        </p>
      </div>
    </Link>
  );
}
