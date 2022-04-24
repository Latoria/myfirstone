import {makeAutoObservable} from "mobx";
import {post} from "./Post.interface";
import type RootStore from "../Store";

export class PostController {
    private post: post.ItemInfo[] | null = [{
        id: 1,
        title: "Nunc vel metus augue",
        date: {
            year: "2021",
            month: "March",
            day: "14",
        },
        pic: "",
        author: "Author",
        category: "Photography",
        body: "Maecenas eget turpis turpis. Nunc vel metus augue. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        tag: ["Design", "Fashion", "Nature"],
        comments: [
            {
                date: "24.03.2022",
                author: "Willey",
                text: "lorem lorem lorem lorem lorem",
                likes: "3",
            },
            {
                date: "24.03.2022",
                author: "Rob",
                text: "lorem lorem lorem lorem lorem",
                likes: "2",
            },
            {
                date: "24.03.2022",
                author: "Andrey",
                text: "lorem lorem lorem lorem lorem",
                likes: "4",
            },

        ]
    },
        {
            id: 2,
            title: "Maecenas eget turpis turpis",
            date: {
                year: "2020",
                month: "May",
                day: "8",
            },
            pic: "",
            author: "Author",
            category: "Logo design",
            body: "Aenean euismod cursus ligula eget dapibus. Praesent vel erat in tortor placerat dignissim.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            tag: ["Retro", "Music", "Template"],
            comments: [
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "3",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "2",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "4",
                },

            ]
        }, {
            id: 3,
            title: " Praesent vel erat in tortor",
            date: {
                year: "2022",
                month: "Feb",
                day: "11",
            },
            pic: "",
            author: "Author",
            category: "Web design",
            body: "Nunc vel metus augue. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            tag: ["Design", "Template", "Retro"],
            comments: [
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "3",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "2",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "4",
                },

            ]
        }, {
            id: 4,
            title: "Pellentesque habitant morbi",
            date: {
                year: "2021",
                month: "Aug",
                day: "3",
            },
            pic: "",
            author: "Author",
            category: "Wordpress",
            body: "Aenean euismod cursus ligula eget dapibus. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            tag: ["Design", "Nature"],
            comments: [
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "3",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "2",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "4",
                },

            ]
        }, {
            id: 5,
            title: "Lorem",
            date: {
                year: "2020",
                month: "Sept",
                day: "1",
            },
            pic: "",
            author: "Author",
            category: "Icons",
            body: "Maecenas eget turpis turpis. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            tag: ["Design"],
            comments: [
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "3",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "2",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "4",
                },

            ]
        },
        {
            id: 6,
            title: "Hello",
            date: {
                year: "2022",
                month: "Apr",
                day: "2",
            },
            pic: "",
            author: "Author",
            category: "Logo design",
            body: "Lorem lorem lorem",
            tag: ["Fashion", "Retro"],
            comments: [
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "3",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "2",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "4",
                },
                {
                    date: "24.03.2022",
                    author: "Author",
                    text: "lorem lorem lorem lorem lorem",
                    likes: "56",
                },
            ]
        },
    ];
    private readonly rootStore: typeof RootStore;

    constructor(rootStore: typeof RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    public get getPost() {
        return this.post;
    }

    public getPostById(id: number) {
        return this.post?.find((item) => item.id === +id);
    }
}
