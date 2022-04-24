import React from 'react';
import "./Post.scss"
import {ReactComponent as Tags} from "../../../Assets/icon/icon_tag.svg";
import {ReactComponent as Comments} from "../../../Assets/icon/icon_comments.svg";
import {ReactComponent as Article} from "../../../Assets/icon/icon_article.svg";
import {ReactComponent as Arrow} from "../../../Assets/icon/arrow_forward.svg";
import RouteGoService from "../../../Services/Stores/Routes/Route.services";
import {route} from "../../../Services/Stores/Routes/Route.interfaces";

const Post = (props) => {

    const {obj} = props;

    const toPost = () => {
        RouteGoService.RouterGo(route.Name.POST, {id: obj.id});
    }
    return (
        <article className="articles-list__item articles-list__item_margin">
            <div className="article-snippet">
                <div className="article-snippet__sidebar">
                    <div className="article-snippet__date article-snippet__date__margin">
                        <span className="article-snippet__month">{obj.date.month} </span>
                        <span className="article-snippet__day">{obj.date.day} </span>


                    </div>
                    <div className="article-snippet__type-icon">
                        <Article style={{width: "40px", height: "40px"}}/>
                    </div>
                </div>

                <div className="article-snippet_body">

                    <h5 onClick={toPost} className="article-snippet_title">
                        {obj.title}
                    </h5>


                    <div className="article-snippet_meta article-snippet_meta_margin">
                        <div className="article-snippet_author">
                            <span className="article-snippet_author-item">Posted by <span
                                className="orange-link">{obj.author}</span> in <span
                                className="orange-link">{obj.category}</span></span>
                        </div>
                        <div className="article-snippet_tags">
                            <Tags style={{fill: "#62b9b0"}}/> {obj.tag.map(item =>
                            <span className="article-snippet_tags-item">
                                <a href="" className="article-snippet_tags-item-link ">{item}</a>
                            </span>
                        )}
                        </div>
                        <div className="article-snippet_comments">
                            <Comments style={{fill: "#62b9b0"}}/> <span
                            className="article-snippet_comments-item">  <span
                            className="orange-link">{obj.comments.length}</span></span>
                        </div>

                    </div>
                    <div className="article-snippet_text article-snippet_text-margin">
                        {obj.body}
                    </div>
                    <div onClick={toPost} className="article-snippet__read-more"><span
                        className="orange-link article-snippet__read-more_margin"> Continue reading</span> <Arrow
                        style={{fill: "#e2534b"}}/></div>
                </div>


            </div>
        </article>
    )

};

export default Post;


