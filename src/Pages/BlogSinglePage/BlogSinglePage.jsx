import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import rootStore from "../../Services/Stores/Store";
import RouteGoService from "../../Services/Stores/Routes/Route.services";
import {route} from "../../Services/Stores/Routes/Route.interfaces";
import {ReactComponent as Tags} from "../../Assets/icon/icon_tag.svg";
import {ReactComponent as Comments} from "../../Assets/icon/icon_comments.svg";
import {ReactComponent as Article} from "../../Assets/icon/icon_article.svg";
import Sidebar from "../../Component/Substances/Sidebar/Sidebar";
import Comment from "../../Component/Substances/Comment/Comment";
import "./BlogSinglePage.css";

const BlogSinglePage = () => {
    const param = useParams();
    const post = rootStore.postStore.getPostById(param.id);

    useEffect(() => {
        post || RouteGoService.RouterGo(route.Name.HOME);
    }, [])
    const articles = rootStore.postStore.getPost
    const [filterTag, setFilterTag] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    return (

        <div className="page-wrapper">

            <article className="articles-list__item articles-list__item_margin">
                <div className="article-snippet">
                    <div className="article-snippet__sidebar">
                        <div className="article-snippet__type-icon">
                            <Article style={{width: "40px", height: "40px"}}/>
                        </div>
                    </div>

                    <div className="article-snippet_body">

                        <h5 className="article-snippet_title">
                            {post?.title}
                        </h5>


                        <div className="article-snippet_meta article-snippet_meta_margin">
                            <div className="article-snippet_author">
                            <span className="article-snippet_author-item">Posted by <span
                                className="orange-link">{post?.author}</span> in <span
                                className="orange-link">{post?.category}</span></span>
                            </div>
                            <div className="article-snippet_tags">
                                <Tags style={{fill: "#62b9b0"}}/> {post?.tag.map(item =>
                                    <span className="article-snippet_tags-item">
                                <a href="" className="article-snippet_tags-item-link ">{item}</a>
                            </span>
                            )}
                            </div>
                            <div className="article-snippet_comments">
                                <Comments style={{fill: "#62b9b0"}}/> <span
                                className="article-snippet_comments-item">  <span
                                className="orange-link">{post?.comments.length}</span></span>
                            </div>

                        </div>
                        <div className="article-snippet_text article-snippet_text-margin">
                            {post?.body}
                        </div>

                    </div>


                </div>
                <div className="articles-list__item_comments">
                    <h3 className="articles-list__item_comments_h1"> {post?.comments.length} Comments </h3>

                    {post?.comments.map((comment) => <Comment item={comment}/>)}

                </div>
            </article>
            <Sidebar arr={articles} handleFilterTag={setFilterTag} handleFilterCategory={setFilterCategory}/>
        </div>

    );
};

export default BlogSinglePage;