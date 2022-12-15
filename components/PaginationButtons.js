import { useRef, useState, useEffect } from "react";
import Styles from "../styles/Search.module.scss";

export default function PaginationButtons(props) {
  const [page, setPage] = useState(0);
  const [nPages, setNPages] = useState(0);
  const [pageButtons, setPageButtons] = useState([]);

  const pPerPage = 16;

  useEffect(() => {
    setNPages(Math.ceil(props.list.length / pPerPage));
  }, [props.list.length]);

  const buttonss = [...Array(nPages)].map((e, i) =>
    page === i ? (
      <button key={i + 1} onClick={() => handleClick(i)} className={Styles.active}>
        {i + 1}
      </button>
    ) : (
      <button key={i + 1} onClick={() => handleClick(i)}>
        {i + 1}
      </button>
    )
  );

  function handleClick(page) {
    setPage(page);
    console.log(page);
  }

  function previousPage() {
    setPage((old) => old - 1);
  }
  function nextPage() {
    setPage((old) => old + 1);
  }

  console.log(nPages);

  return nPages > 1 ? (
    <div className={Styles.pagination}>
      <button className={Styles.paginationButton} onClick={previousPage}>
        &#60;&#60; Previous
      </button>
      {buttonss}
      <button className={Styles.paginationButton} onClick={nextPage}>
        Next &#62;&#62;
      </button>
    </div>
  ) : null;
}
