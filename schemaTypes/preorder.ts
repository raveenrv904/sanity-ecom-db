export default {
  name: 'preOrder',
  title: 'Pre Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      description: 'Unique identifier for the order',
    },
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      description: 'Unique identifier for the transaction',
    },
    {
      name: 'totalPaidPrice',
      title: 'Total Paid Price',
      type: 'number',
      description: 'Total amount paid for the order',
      validation: (Rule: any) => Rule.min(0).precision(2),
    },
    {
      name: 'orderProducts',
      title: 'Order Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'orderProduct'}],
        },
      ],
      description: 'List of products in the order',
    },
    {
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'address'}],
        },
      ],
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      description: 'Current status of the order',
      options: {
        list: [
          {title: 'Ordered', value: 'ordered'},
          {title: 'Packed', value: 'packed'},
          {title: 'Shipped', value: 'shipped'},
          {title: 'Delivered', value: 'delivered'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      description: 'Status of payment (e.g., Paid, Pending, Failed)',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      description: 'Timestamp when the order was created',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
