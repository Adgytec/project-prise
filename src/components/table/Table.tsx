"use client";

import { ReportTable } from "@/data/reports-table/type";
import React, { useState } from "react";
import Container from "../Container/Container";

import styles from "./table.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface ReportTableProps {
  heading: string;
  data: ReportTable[];
}

const Table = ({ heading, data }: ReportTableProps) => {
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
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

  return (
    <Container className={styles.container}>
      <h3>{heading}</h3>

      <div className={styles.info}>
        <h4>Total records: {data.length}</h4>

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
      </div>

      <div className={styles.table}>
        <div className={styles.table_heading}>
          <h4>N°</h4>
          <h4>Territoire</h4>
          <h4>Secteur</h4>
          <h4>Site d&apos;intervention</h4>
          <h4>Infrastructures</h4>
          <h4>Latitude</h4>
          <h4>Longitude</h4>
        </div>

        {currentPageData.map((item, index) => (
          <div key={heading + (currentPage - 1) * itemsPerPage + index}>
            <p>{(currentPage - 1) * itemsPerPage + index + 1}</p>
            <p>{item.territory}</p>
            <p>{item.sector}</p>
            <p>{item.site}</p>
            <p>{item.infrastructure}</p>
            <p>{item.latitude}</p>
            <p>{item.longitude}</p>
          </div>
        ))}
      </div>

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
    </Container>
  );
};

export default Table;
