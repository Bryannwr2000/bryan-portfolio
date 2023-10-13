export default {
  name: 'skillsMechatronics',
  title: 'Mechatronics Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'skillLevel',
      title: 'Skill Level',
      type: 'string',
      options: {
        list: [
          {title: 'Basic Level', value: 'basic'},
          {title: 'Proficient Level', value: 'proficient'},
        ],
      },
    },
  ],
}
