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
        // {
        //     name: 'content',
        //     title: 'Content',
        //     type: 'array',
        //     of: [
        //        { type: 'block'}
        //     ]
        // }
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'code',
                    title: 'Code Block',
                    options: {
                        language: 'javascript',
                        languageAlternatives: [
                            { title: 'TypeScript', value: 'typescript' },
                            { title: 'HTML', value: 'html' },
                            { title: 'CSS', value: 'css' },
                            { title: 'Python', value: 'python' },
                            // Add more languages as needed
                        ],
                        withFilename: true,
                    },
                }
            ]
        }
    ]
}