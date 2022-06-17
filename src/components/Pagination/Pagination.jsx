const Pagination = ({ prevPage, nextPage }) => {
  return (
    <div>
      {prevPage && (
        <button type="button" onClick={prevPage}>
          Previous
        </button>
      )}
      {nextPage && (
        <button type="button" onClick={nextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
