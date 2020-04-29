export default {
  name: 'stack',
  title: 'Stack',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string'
    },
    {
      name: 'docs',
      title: 'Docs',
      type: 'reference',
      to: [{type: 'tech'}]
    },
  ],
  preview: {
    select: {
      subtitle: 'title',
      title: 'tech.title',
      media: 'tech.screenshot'
    }
  }
}
