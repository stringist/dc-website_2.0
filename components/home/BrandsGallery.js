import styles from "../../styles/Home.module.scss";
import BrandNames from "./BrandNames";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
// import logos from "../../public/images/brands";

export default function BrandsGallery() {
  const names = BrandNames.map((name) => name.toLowerCase());
  const path = "/../public/images/brands/1x/";
  return (
    <section className={styles.brands}>
      <h2>Brands</h2>
      <div className={styles.logos}>
        {names.map((brand) => (
          <div className={styles.tile} key={uuidv4}>
            <Image src={`${path}${brand}.png`} alt={brand} width={100} height={100} objectFit="contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
