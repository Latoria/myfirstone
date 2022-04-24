import {useState} from "react";

/**
 * Возвращает текущую страницу для пагинации
 * @params countVisible - колличетсво видимых элементов
 * @params countElements - всего элементов
 * @constructor
 */
export const useEditCurrentPage = (countVisible, countElements) => {

    const [currentPage, setCurrentPage] = useState(0);

    const handleFirstPage = () => setCurrentPage(0)

    const totalPages = Math.ceil(countElements / countVisible);

    const handlePrevPage = () => {
        currentPage > 0 && setCurrentPage((prevState) => prevState - 1);
    };

    const handleNextPage = () => {
        (currentPage * countVisible || countVisible) < countElements &&
        setCurrentPage((prevState) => prevState + 1);
    };


    return [currentPage, handlePrevPage, handleNextPage, handleFirstPage, totalPages, setCurrentPage];
};


