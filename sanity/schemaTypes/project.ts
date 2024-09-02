export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of project',
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
        },        {
            name: 'github_link',
            title: 'GitHub Link',
            type: 'url',
            description: 'Enter the GitHub repository URL for this project',
        },
        {
            name: 'project_link',
            title: 'Project Link',
            type: 'url',
            description: 'Enter the live project URL or demo link',
        }
    ]
}