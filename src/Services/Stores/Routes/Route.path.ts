import {route} from "./Route.interfaces";
import {lazy} from "react";

const MainPage = lazy(() => import("../../../Pages/HomePage"));
const AboutPage = lazy(() => import("../../../Pages/AboutPage/AboutPage"));
const ErrorPage = lazy(() => import("../../../Pages/ErrorPage"));
const BlogPage = lazy(() => import("../../../Pages/BlogPage/BlogPage"));
const BlogSinglePage = lazy(() => import("../../../Pages/BlogSinglePage/BlogSinglePage"));

export const routePath: route.IRoute[] = [
    {
        path: "/",
        name: route.Name.HOME,
        element: MainPage,
        layout: '',
    },
    {
        path: "/about",
        name: route.Name.ABOUT,
        element: AboutPage,
        layout: '',
    },
    {
        path: "/services",
        name: route.Name.SERVICES,
        element: AboutPage,
        layout: '',
    },
    {
        path: "/portfolio1",
        name: route.Name.PORTFOLIO1,
        element: AboutPage,
        layout: '',
    },
    {
        path: "/portfolio2",
        name: route.Name.PORTFOLIO2,
        element: AboutPage,
        layout: '',
    },
    {
        path: "/portfolio3",
        name: route.Name.PORTFOLIO3,
        element: AboutPage,
        layout: '',
    },
    {
        path: "/blog",
        name: route.Name.BLOG,
        element: BlogPage,
        layout: '',
    },
    {
        path: "/features",
        name: route.Name.FEATURES,
        element: AboutPage,
        layout: '',
    },
    {
        path: "/contacts",
        name: route.Name.CONTACTS,
        element: AboutPage,
        layout: '',
    },
    {
        path: "*",
        name: route.Name.ERROR,
        element: ErrorPage,
        layout: '',
    },
    {
        path: "/post/:id",
        name: route.Name.POST,
        element: BlogSinglePage,
        layout: '',
    },
];

export const getRoutes = () => routePath;
