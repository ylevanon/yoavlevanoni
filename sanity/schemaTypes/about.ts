export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of about section',
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
            name: 'leftImage',
            title: 'iamge left or right aligned',
            type: 'boolean'
        }
    ]
}