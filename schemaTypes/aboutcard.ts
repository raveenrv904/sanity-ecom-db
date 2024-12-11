export default {
  name: 'aboutcard',
  title: 'About Card',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The specialty or tagline associated with the testimonial.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial or description about Zoyee Lifestyle.',
      validation: (Rule: any) => Rule.required().min(10).max(300),
    },

    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
