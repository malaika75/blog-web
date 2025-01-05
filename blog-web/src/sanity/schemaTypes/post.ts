export default{
    name: 'post',
    title: 'post',
    type: 'document',
    fields:[
        {
        name:'title',
        type:'string',
        title: 'post title'
       },
       {
        name:'slug',
        type:'slug',
        title:'SLug',
        options:{
            source:'title'
        },
        validation: (Rule:any) => Rule.required()
       },
       {
        name:'headline',
        type:'string',
        title: 'headline',
        validation: (Rule:any) => Rule.required()
       },
       {
        name:'summary',
        type:'text',
        title: 'summary',
        validation: (Rule:any) => Rule.required()
       },
       {
        name:'image',
        type:'image',
        title: 'image',
        validation: (Rule:any) => Rule.required()
       },
       {
        name:'content',
        type:'array',
        title: 'content',
        of:[
            {
            type:'block'
           },
           {
            type: 'image', // Image blocks
            title: 'Image',
            options: {
            hotspot: true, // Enables image cropping
            },
        },
    ],
        validation: (Rule:any) => Rule.required()
       },
       
    ]
}