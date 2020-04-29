import { GrAppleAppStore } from 'react-icons/gr'

export default {
  name: 'app',
  title: 'App',
  type: 'document',
  GrAppleAppStore,
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
      name: 'screenshot',
      title: 'Screenshot',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'reference',
      to: [{type: 'stack'}]
    },
    {
      name: 'deploy',
      title: 'Deploy',
      type: 'url'
    },
    
  ],
  preview: {
    select: {
      title: 'title',
      media: 'screenshot',
      subtitle: 'technology.title',
    },
    prepare(selection) {
      const stack = [selection.stack0, selection.stack1].filter(Boolean).join(', ')

      return {
        title: `${selection.title}`,
        subtitle: stack,
        media: selection.media
      }
    }
  }
}
