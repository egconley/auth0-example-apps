import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'app',
  title: 'App',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime'
    },
    {
      name: 'popularity',
      title: 'Popularity',
      type: 'number'
    },
    {
      name: 'screenshot',
      title: 'Screenshot',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [{type: 'tech'}]
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'screenshot',
      stack0: 'tech.0.title',
      stack1: 'tech.1.title'
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const stack = [selection.stack0, selection.stack1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: stack,
        media: selection.media
      }
    }
  }
}
