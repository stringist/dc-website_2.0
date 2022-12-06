import Image from "next/image";
export default function AboutProfile({ image, text }) {
  return (
    <div>
      <Image src={image} alt="black haired person" height={250} width={250} />
      <p>{text}</p>
    </div>
  );
}
