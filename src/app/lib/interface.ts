import { Url } from "url";

export interface simpleBlogCard {
    title: string;
   currentSlug: string;
    smallDescription: string;
    titleImage: any;
}

export interface BlogPost {
    title: string;
    currentSlug: string;
    content: any;
    titleImage: any;
}

export interface ProjectCard {
    title: string;
     smallDescription: string;
     titleImage: any;
     project_link: Url;
     github_link:Url;
}

export interface AboutCard {
    title: string;
     smallDescription: string;
     titleImage: any;
     leftImage: boolean
}