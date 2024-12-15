export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'is_launched',
      type: 'boolean',
      title: 'Is Launched',
      initialValue: true,
    },
    {
      name: 'SKU',
      type: 'string',
      title: 'SKU',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'actual_price',
      type: 'number',
      title: 'Actual Price',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Discount',
    },
    {
      name: 'discount_price',
      type: 'number',
      title: 'Discount Price',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [{type: 'color'}],
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{type: 'string'}],
    },
    {
      name: 'isSoldOut',
      type: 'boolean',
      title: 'Is SoldOut',
    },
    {
      name: 'publish',
      type: 'boolean',
      title: 'Publish',
      default: true,
    },
  ],
}
