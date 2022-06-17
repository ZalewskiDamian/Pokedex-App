import ReactPaginate from "react-paginate";
import { PaginationWrapper } from "./Pagination.styles";

const Pagination = ({ pageCount, changePage }) => {
  return (
    <PaginationWrapper>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel="..."
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => changePage(data.selected + 1)}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        activeClassName="active-link"
      />
    </PaginationWrapper>
  );
};

export default Pagination;
