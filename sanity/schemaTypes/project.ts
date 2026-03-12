import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Dự án (Portfolio)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tên dự án',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Ảnh đại diện (Cover)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Thuộc danh mục',
      description: 'Chọn danh mục phù hợp cho dự án này',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
    }),
    defineField({
      name: 'client',
      title: 'Khách hàng (VD: Dự án nội bộ, Công ty ABC)',
      type: 'string',
    }),
    defineField({
      name: 'completionDate',
      title: 'Thời gian hoàn thành (VD: Đầu năm 2026)',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Vai trò của bạn (VD: Chiến lược, Thiết kế, Code)',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Nội dung Case Study',
      description: 'Phân tích tổng quan, thử thách và giải pháp',
      type: 'array',
      of: [{ type: 'block' }], 
    }),
  ],
})