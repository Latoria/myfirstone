import React from 'react';
import "./Sidebar.css";
import Tags from "../../Molecules/Tags/Tags";
import Categories from "../../Molecules/Categories/Categories";
import RecentPosts from "../../Molecules/RecentPosts/RecentPosts";
import rootStore from "../../../Services/Stores/Store";


const Sidebar = (props) => {
    const articles = rootStore.postStore.getPost;
    const {handleFilterTag, handleFilterCategory} = props;
    return (
        <div>
            <div className="page__sidebar">
                <Categories handleFilterCategory={handleFilterCategory}/>
                <RecentPosts arr={articles}/>
                <Tags handleFilterTag={handleFilterTag}/>
            </div>
        </div>
    );
};

export default Sidebar;