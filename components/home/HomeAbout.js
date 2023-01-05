import Link from "next/link";
import styles from "../../styles/Home.module.scss";
export default function HomeAbout() {
  return (
    <section className={styles.about}>
      <article>
        <h2>About</h2>
        <p>
          Disc Connection is a 2-man stakeholder company whose primary purpose
          is to spread the sport of disc golf in Denmark via sale of discs and
          equipment for disc golf. We started together in the spring of 2006,
          and are the most versatile importer and dealer of golf discs and
          equipment for disc golf, and have a very large inventory and wide
          selection of quality products, as well as Denmark&#39;s best prices -
          regardless of whether you shop online, in our Proshop in Tune, or in
          our partner stores in Roskilde, at RUC, in Viby, or at Østerbro.
        </p>
        <p>
          We are generally present with our &quot;mobile shop&quot; in
          Valbyparken 3-4 days a week, including most weekends &#40;when we are
          not out for tournaments&#41;. In addition, we are almost always
          representing with the shop for tournaments on Zealand. Besides that,
          you are welcome to visit our Proshop on the Greve course next to Tune
          Kursuscenter, where you can see our entire stock.
        </p>
        <Link href="/about">
          <button className="primary-button">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 12 12"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </Link>
      </article>
    </section>
  );
}
