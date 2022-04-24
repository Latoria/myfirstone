import React from 'react';
import "./Tags.css";


const Tags = (props) => {
    const {handleFilterTag} = props;

    const Tags = ["Fashion", "Retro", "Nature", "Music", "Design", "Template"];
    return (
        <div>
            <div className="sidebar__tags">
                <div className="sidebar__title"><span>Tags</span></div>
                <div className="sidebar__tags_items">
                    {
                        Tags.map((item) =>
                            <div className="sidebar__tags_item">
                                <span onClick={() => handleFilterTag(item)}> {item} </span>
                            </div>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Tags;