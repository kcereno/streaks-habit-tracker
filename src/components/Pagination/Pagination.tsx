/* eslint-disable react/button-has-type */
interface Props {
  currentPage: number;
  updateCurrentPage: (updatedPage: number) => void;
  maxPages: number;
}

function Pagination({ currentPage, updateCurrentPage, maxPages }: Props) {
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
