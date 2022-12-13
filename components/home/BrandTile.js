import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

export default function BrandTile({ brand }) {
  let brandLogos = [];
  brand.img.includes(",") ? (brandLogos = brand.img.split(",")) : (brandLogos = brandLogos.concat(brand.img));
  return (
    <Link href={`/product/${brand._id}`}>
      <div className={styles.brandTile}>
        <Image
          src={brandLogos[0]}
          alt={brand.name}
          width={200}
          height={200}
          layout="responsive"
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
        <p>{brand.name}</p>
      </div>
    </Link>
  );
}
