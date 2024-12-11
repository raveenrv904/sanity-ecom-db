// schemas/contact.js

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(2).max(50),
    },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(2).max(50),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule: any) => Rule.required().min(10).max(1000),
    },
    {
      name: 'contacted',
      title: 'Contacted',
      type: 'boolean',
      initialvalue: false,
    },
  ],
}
