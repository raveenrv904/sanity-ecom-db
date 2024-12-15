// schemas/user.js

export default {
  name: 'users',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'addresses',
      title: 'Addresses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'address'}],
        },
      ],
    },
    {
      name: 'usedCoupons',
      title: 'Used Coupons',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'coupon'}],
        },
      ],
    },
    {
      name: 'orderDetails',
      title: 'Order Details',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'order'}],
        },
      ],
    },
    {
      name: 'preOrders',
      title: 'Pre Order Details',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'preOrder'}],
        },
      ],
    },
  ],
}
