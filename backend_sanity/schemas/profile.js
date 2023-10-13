export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'altText',
      title: 'altText',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Img',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
  ],
}
