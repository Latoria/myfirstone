import React from 'react';
import "./Categories.css";
import {ReactComponent as Arrow} from "../../../Assets/icon/arrow_forward.svg";


const Categories = (props) => {
    const {handleFilterCategory} = props;


    const Categories = ["Logo design", "Web design", "Photography", "Wordpress", "Icons"];
    return (


        <div>
            <div className="sidebar__categories">
                <div className="sidebar__title"><span>Categories</span></div>
                {
                    Categories.map((item) => <div
                        className="sidebar__categories_item">
                        <div className="categories_item_arrow"><Arrow/></div>
                        <span onClick={() => handleFilterCategory(item)}
                              className="sidebar__categories_item_link">{item}</span>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Categories;