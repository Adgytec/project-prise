"use client";

import { ReportsDisplayProps } from "./types";
import { useState } from "react";
import styles from "./reports.module.scss";
import Container from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ReportsDisplay = ({ heading, data }: ReportsDisplayProps) => {
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Get data for the current page
  const currentPageData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Change page handler
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  const PageHandler = (
    <div className={styles.pagination}>
      <button
        data-type="link"
        data-variant="primary"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <span>
        {currentPage} / {pageCount}
      </span>
      <button
        data-type="link"
        data-variant="primary"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );

  return (
    <Container className={styles.container}>
      <h3>{heading}</h3>

      <div className={styles.info}>
        <h4>Total records: {data.length}</h4>

        {PageHandler}
      </div>

      <div className={styles.table}>
        <div className={styles.table_heading}>
          <h4>N°</h4>
          <h4>Ouvrage</h4>
          <h4>Territoire</h4>
          <h4>Infrastructures</h4>
          <h4>{"Lieu d'implantation"}</h4>
          <h4>Secteur</h4>
          <h4>{"Site d'intervention"}</h4>
          <h4>Coordonnées</h4>
        </div>

        {currentPageData.map((item, index) => (
          <div key={item.id}>
            <p>{(currentPage - 1) * itemsPerPage + index + 1}</p>
            <p>{item.Ouvrage || "-"}</p>
            <p>{item.Territoire || "-"}</p>
            <p>{item.Infrastructures || "-"}</p>
            <p>{item["Lieu d'implantation"] || "-"}</p>
            <p>{item.Secteur || "-"}</p>
            <p>{item["Site d'intervention"] || "-"}</p>
            <p>{item["Coordonnées"] || "-"}</p>
          </div>
        ))}
      </div>

      {PageHandler}
    </Container>
  );
};

export default ReportsDisplay;
