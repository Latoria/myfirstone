import {ComponentType, LazyExoticComponent} from "react";

export namespace route {

    export enum Name {
        HOME = "HOME",
        ABOUT = "ABOUT",
        SERVICES = "SERVICES",
        PORTFOLIO1 = "PORTFOLIO1",
        PORTFOLIO2 = "PORTFOLIO2",
        PORTFOLIO3 = "PORTFOLIO3",
        BLOG = "BLOG",
        FEATURES = "FEATURES",
        CONTACTS = "CONTACTS",
        ERROR = "ERROR",
        POST = "POST",
    }

    export interface IRoute {
        path: string;
        name: Name;
        element: LazyExoticComponent<ComponentType<any>> | any;
        layout: LazyExoticComponent<ComponentType<any>> | any;
    }
}