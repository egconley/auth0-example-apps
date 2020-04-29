import icon from 'react-icons/lib/md/person'

export default {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      description: 'Tech stack'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    }
  ],
  preview: {
    select: {title: 'name', url: 'url'}
  }
}
