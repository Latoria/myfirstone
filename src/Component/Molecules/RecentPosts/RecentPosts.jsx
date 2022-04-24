import React from 'react';
import "./RecentPosts.css";
import {ReactComponent as Arrow} from "../../../Assets/icon/icon_chevron_right.svg";

const RecentPosts = (props) => {
    const {arr} = props;

    return (
        <div>
            <div className="sidebar__recent-posts">
                <div className="sidebar__title"><span>Recent posts</span></div>
                {arr.slice(0, 4).map((item) => <div className="sidebar__recent-posts_item">
                        <div className="recent-posts_item_mark"><Arrow style={{fill: "#62b9b0"}}/></div>
                        <div>
                            <div className="recent-posts__title">

                                {item.title}
                            </div>
                            <div className="recent-posts__date">

                                {item.date.day} {item.date.month} {item.date.year}
                            </div>
                        </div>


                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentPosts;