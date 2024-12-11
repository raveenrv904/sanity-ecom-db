export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload the logo image here (JPEG, JPG, PNG, WebP).',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
