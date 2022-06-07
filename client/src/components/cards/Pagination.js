/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Pagination({ countriesPerPage, feedback, paginate }) {
  const pageNumbers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(feedback / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul
        className="pagination"
        style={{ marginTop: '20px', justifyContent: 'center' }}
      >
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
