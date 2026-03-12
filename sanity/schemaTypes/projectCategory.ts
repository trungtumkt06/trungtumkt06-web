import {PackageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const projectCategoryType = defineType({
  name: 'projectCategory',
  title: 'Danh mục Dự án',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tên danh mục',
      description: 'Ví dụ: Thiết kế Web, Branding, Photography...',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
  ],
})