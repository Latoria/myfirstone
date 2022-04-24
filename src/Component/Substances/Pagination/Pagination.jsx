import React, {useState} from 'react';

import {ReactComponent as ArrowLeft} from "../../../Assets/icon/icon_chevron_left.svg";
import {ReactComponent as ArrowRight} from "../../../Assets/icon/icon_chevron_right.svg";
import PaginationButton from "../../Molecules/Buttons/PaginationButton/PaginationButton";

const Pagination = (props) => {
    const {arrForPagination, itemsPerPage, callback} = props;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(arrForPagination.length / itemsPerPage);
    const numbers = [];

    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
        console.log(i);
    }


    return (
        <div>
            <div className="page__pagination">

                <PaginationButton> <ArrowLeft/> </PaginationButton>
                {
                    numbers.map((number) => <PaginationButton> {number} </PaginationButton>)
                }
                <PaginationButton> <ArrowRight/> </PaginationButton>
            </div>
        </div>
    );
};

export default Pagination;