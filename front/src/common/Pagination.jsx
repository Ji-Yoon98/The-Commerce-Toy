import React from 'react';
import { Li, Ul } from './Styled';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  // 페이지 이동 처리
  const handleClick = (number) => {
    onPageChange(number - 1); // 페이지 번호를 사용자가 보기 쉽게 1을 뺀 값으로 전달
  };

  return (
    <nav>
      <Ul className="pagination">
        {pageNumbers.map(number => (
          <Li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
            <button onClick={() => handleClick(number)} className="page-link">
              {number}
            </button>
          </Li>
        ))}
      </Ul>
    </nav>
  );
}

export default Pagination;
