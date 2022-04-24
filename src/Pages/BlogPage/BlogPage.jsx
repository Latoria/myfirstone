import React, {useState} from 'react';
import "./BlogPage.css";
import Post from "../../Component/Substances/Post/Post";
import Sidebar from "../../Component/Substances/Sidebar/Sidebar";
import rootStore from "../../Services/Stores/Store";
import {useEditCurrentPage} from "../../Services/Hooks/Pagination";
import {ReactComponent as ArrowLeft} from "../../Assets/icon/icon_chevron_left.svg";
import PaginationButton from "../../Component/Molecules/Buttons/PaginationButton/PaginationButton";
import {ReactComponent as ArrowRight} from "../../Assets/icon/icon_chevron_right.svg";


const itemsPerPage = 5;


const BlogPage = () => {
    const [filterTag, setFilterTag] = useState('');
    const [filterCategory, setFilterCategory] = useState('');


    const articles = rootStore.postStore.getPost

    const [
        currentPage,
        handlePrevPage,
        handleNextPage,
        handleFirstPage,
        totalPages,
        setCurrentPage
    ] = useEditCurrentPage(itemsPerPage, articles.length)

    function filter() {
        return articles.filter(item => {
            return ((filterCategory === '' ? true : item.category.includes(filterCategory)) &&
                (filterTag === '' ? true : item.tag.includes(filterTag)))
        })
    }


    return (
        <div>
            <div className="BreadCrumbNav">
                <div className="BreadCrumbNavWrapper">
                    <div className="BreadCrumbCurrent">About us</div>

                    <div className="BreadCrumbs">
                        <ul>
                            <li>Home</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="page-wrapper">

                <div className="page__down">
                    <div className="articles-list">
                        {filter()?.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage).map((item) =>
                            <Post obj={item}/>)}
                    </div>
                    <div className="page__pagination">

                        <PaginationButton onClick={handlePrevPage}> <ArrowLeft/> </PaginationButton>
                        {
                            [...Array(totalPages)].map((e, i) => <PaginationButton
                                onClick={() => setCurrentPage(i)}> {i + 1} </PaginationButton>)
                        }
                        <PaginationButton onClick={handleNextPage}> <ArrowRight/> </PaginationButton>
                    </div>
                </div>


                <Sidebar arr={articles} handleFilterTag={setFilterTag} handleFilterCategory={setFilterCategory}/>


            </div>

        </div>


    )

}

export default BlogPage;