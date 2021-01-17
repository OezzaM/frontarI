import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./Pagination.css";
import { useEffect } from "react";

const Pagination2 = (props) => {
  const [currentPage, setcurrentPage] = useState(1);

  const itemsPerPage = 3;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = props.items.slice(indexOfFirst, indexOfLast);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number, index) => {
    return (
      <Pagination.Item key={index} onClick={() => setcurrentPage(number)}>
        {number}
      </Pagination.Item>
    );
  });

  return (
    <React.Fragment>
      <ListGroup horizontal className="align-items-stretch flex-wrap">
        {currentItems}
      </ListGroup>
      <Pagination> {renderPageNumbers}</Pagination>
    </React.Fragment>
  );
};

export default Pagination2;
