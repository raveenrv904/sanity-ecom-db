export default {
  name: 'colorPalette',
  type: 'document',
  title: 'Color Palette',
  fields: [
    {
      name: 'code',
      type: 'string',
      title: 'Code',
      validation: (Rule: any) =>
        Rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hex color code',
          invert: false,
        }),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
