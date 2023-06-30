import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.scss';

const Pagination = ({ currentPage, onPageChange, pageCount }) => {
    const handlePageClick = (selectedPage) => {
        onPageChange(selectedPage);
    };

    return (
        <div>
            <ReactPaginate
                className={'root'}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={handlePageClick}
                pageRangeDisplayed={12}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                forcePage={currentPage}
            />
        </div>
    );
};

export default Pagination;
