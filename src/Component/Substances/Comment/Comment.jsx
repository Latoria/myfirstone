import React from 'react';
import {ReactComponent as UserPic} from "../../../Assets/icon/icon_portrait.svg";
import {ReactComponent as Reply} from "../../../Assets/icon/icon_replay.svg";
import "./Comment.css";

const Comment = (props) => {
    const {item} = props;
    return (

        <div className="comments__item comments__item_margin">
            <div className="comments__item_image">
                <div className="comments__item_users-pic">
                    <UserPic style={{fill: "#7f8c8c", width: "70px", height: "70px"}}/>
                </div>
            </div>
            <div className="comments__item_data">
                <div className="comments__item_header">
                    <div className="comments__item_users-name">{item.author}</div>
                    <div className="comments__item_datestam">{item.date}</div>
                    <div className="comments__item_reply"><Reply style={{fill: "#e2534b"}}/> reply</div>
                </div>

                <div className="comments__item_users-comment">{item.text}
                </div>
            </div>

        </div>
    );
};

export default Comment;