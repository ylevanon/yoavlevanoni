import { title } from "process";

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog post',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog post',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'titleImage',
            title: 'Title Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'smallDescription',
            title: 'Small Decsription',
            type: 'text',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
               { type: 'block'}
            ]
        },
    ]
}