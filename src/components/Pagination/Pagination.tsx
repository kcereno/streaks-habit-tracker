/* eslint-disable react/button-has-type */

import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';

function Pagination() {
  const { currentPage, updateCurrentPage, maxPages } = useContext(AppContext);

  const handlePreviousButtonClick = () => {
    updateCurrentPage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    updateCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center">
      <div className="btn-group my-5">
        <button
          className="btn"
          type="button"
          onClick={handlePreviousButtonClick}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="btn">{currentPage}</button>
        <button
          className="btn"
          type="button"
          onClick={handleNextButtonClick}
          disabled={currentPage === maxPages}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Pagination;
