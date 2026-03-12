import { defineField, defineType } from 'sanity'

export const productCategoryType = defineType({
  name: 'productCategory',
  title: 'Danh mục Sản phẩm',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tên danh mục (VD: Công cụ AI, Thiết kế)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Mô tả ngắn (Tùy chọn)',
      type: 'text',
    }),
  ],
})