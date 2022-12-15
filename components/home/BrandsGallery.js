import styles from "../../styles/Home.module.scss";
import BrandNames from "./BrandNames";
import Image from "next/image";

export default function BrandsGallery() {
  const brandObjectArr = BrandNames.map((brand) => ({
    name: brand.toLowerCase(),
    src: `/images/brands/${brand.toLowerCase()}.png`,
  }));
  // const path = "/../public/images/brands/";
  console.log(brandObjectArr);

  // const names = BrandNames.map((name) => name.toLowerCase());
  return (
    <section className={styles.brands}>
      <h2>Brands</h2>
      <div className={styles.logos}>
        {brandObjectArr.map((brand, i) => (
          <div className={styles.tile} key={i}>
            <Image src={brand.src} alt={brand} width={100} height={100} objectFit="contain" />
          </div>
        ))}
        {/* {names.map((brand, i) => (
          <div className={styles.tile} key={i}>
            <Image src={`${path}${brand}.png`} alt={brand} width={100} height={100} objectFit="contain" />
          </div>
        ))} */}
      </div>
    </section>
  );
}
