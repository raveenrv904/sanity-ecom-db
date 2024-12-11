export default {
  name: 'orderProduct',
  title: 'Order Product',
  type: 'document',
  fields: [
    {
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      description: 'Unique identifier for the product',
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'Name of the product',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'Size of the product (e.g., Small, Medium, Large)',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Color of the product',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      description: 'Quantity of the product ordered',
      validation: (Rule: any) => Rule.min(1).integer(),
    },
    {
      name: 'actualProduct',
      title: 'Actual Product',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    },
  ],
}
