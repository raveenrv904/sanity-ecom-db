// schemas/coupon.js
export default {
  name: 'coupon',
  title: 'Coupon',
  type: 'document',
  fields: [
    {
      name: 'couponCode',
      title: 'Coupon Code',
      type: 'string',
      description: 'Unique code for the coupon (e.g., "SAVE10", "FREESHIP")',
      validation: (Rule: any) => Rule.required().min(3).max(10),
    },
    {
      name: 'discountType',
      title: 'Discount Type',
      type: 'string',
      description: 'Type of discount (e.g., "Percentage", "Fixed Amount", "Free Shipping")',
      options: {
        list: [
          {title: 'Percentage', value: 'percentage'},
          {title: 'Fixed Amount', value: 'fixed'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'discountValue',
      title: 'Discount Value',
      type: 'number',
      description: 'The value of the discount (e.g., "10" for 10%, "50" for $50)',
      validation: (Rule: any) => Rule.required().min(0),
    },

    {
      name: 'singleUsePerCustomer',
      title: 'Single Use Per Customer',
      type: 'boolean',
      description: 'Indicates whether the coupon can only be used once per customer',
      initialValue: true,
    },
    {
      name: 'couponDescription',
      title: 'Coupon Description',
      type: 'text',
      description: 'Description of the coupon (e.g., "10% off your next purchase")',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Indicates whether the coupon is currently active or not',
      initialValue: true,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      description: 'Timestamp when the coupon was created',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      description: 'Timestamp when the coupon was last updated',
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: 'couponCode',
      subtitle: 'couponDescription',
      media: 'discountType',
    },
  },
}
