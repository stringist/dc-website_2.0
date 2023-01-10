import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Linking() {
  return (
    <>
      <section className={styles.linking}>
        <article>
          <h2>Linking Chains</h2>
          <p>
            Linking Chains is a brand under Disc Connection and with this we
            bring together all types of players, different manufacturers,
            different courses and different tournament concepts. In other words,
            we link discgolf and our values together.{" "}
          </p>
          <aside>
            <p>Upcoming tournaments: </p>
            <div>
              <a
                href="https://sites.google.com/discsalg.dk/linkingchains/lc-dam-tour-2022/1-holbæk-263"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span>- LC D&apos;Am Tour #1 - Holbæk, 26/3</span>
              </a>
              <a
                href="https://sites.google.com/discsalg.dk/linkingchains/lc-dam-tour-2022/2-valbyparken-75"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                <span>- LC D&apos;Am Tour #2 - Valbyparken, 7/5</span>
              </a>
            </div>
          </aside>

          <a
            href="https://sites.google.com/discsalg.dk/linkingchains/forside"
            rel="noopener noreferrer"
            target="_blank"
          >
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
          </a>
        </article>
      </section>
    </>
  );
}
