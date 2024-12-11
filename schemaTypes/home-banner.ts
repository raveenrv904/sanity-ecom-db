export default {
  name: 'homeBanner', // Identifier for the document type
  title: 'Home Banner', // Display name in the Sanity Studio
  type: 'document', // Document type for collection
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image', // Media type (Sanity currently supports only images for this field)
          options: {
            hotspot: true, // Allows cropping and focus area selection
          },
        },
      ],
      validation: (Rule: any) => Rule.required().error('At least one image is required'),
      description: 'Add one or more images for the home banner',
    },
  ],
}
