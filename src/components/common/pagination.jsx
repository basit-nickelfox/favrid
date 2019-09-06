import React from 'react';
export const Pagination = (props) => {
    const { itemCount, pageSize,onPageChange,currentPage } = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) {
        return null;
    }
    let pageCountArray = [];
    for (let value = 1; pageCount >= value; value++) {
        pageCountArray.push(value);
    }

    return (
        <nav arial-label="Page navigation">
            <ul className="pagination">
                {pageCountArray.map(page =>
                    <li className={currentPage===page ?'page-item active':'page-item'} key={page} ><button  onClick={()=>onPageChange(page)} className="page-link">{page}</button></li>
                )}
            </ul>
        </nav>
    );
    
}