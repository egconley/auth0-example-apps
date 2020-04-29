import { BsCodeSlash } from 'react-icons/bs'

export default {
  name: 'stack',
  title: 'Stack',
  type: 'document',
  BsCodeSlash,
  fields: [
    {
      name: 'title',
      title: 'title',
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
  ],
  preview: {
    select: {
      title: 'title',
    }
  }
}
