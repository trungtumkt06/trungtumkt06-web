import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Danh mục bài viết',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tên danh mục',
      description: 'Ví dụ: Nhiếp ảnh, Lập trình, Marketing...',
      type: 'string',
      validation: (rule) => rule.required().error('Tên danh mục không được để trống'),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)', 
      type: 'slug',
      description: 'Nhấn nút Generate để tạo đường dẫn tự động từ tên danh mục',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Đường dẫn không được để trống'),
    }),
    defineField({
      name: 'description',
      title: 'Mô tả ngắn',
      type: 'text',
      description: 'Tóm tắt nội dung của danh mục này (không bắt buộc)',
    }),
  ],
})
