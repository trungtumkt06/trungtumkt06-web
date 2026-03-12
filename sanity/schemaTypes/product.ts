import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Sản phẩm số',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tên sản phẩm',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      description: 'Bấm nút Generate để tự động tạo đường dẫn chuẩn SEO từ tên sản phẩm',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Giá bán (VD: 199.000đ)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Giá gốc (Tùy chọn - Dùng để hiển thị giá gạch ngang)',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Nhãn nổi bật (VD: Bán chạy, Hot, Khuyên dùng)',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Hình thức giao hàng (VD: Giao tự động, Bảo hành 1-1)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Thuộc Danh mục nào?',
      type: 'reference',
      to: [{ type: 'productCategory' }],
    }),
    defineField({
      name: 'features',
      title: 'Các tính năng nổi bật (Dấu tick xanh)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Hình ảnh đại diện',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      title: 'Nội dung chi tiết sản phẩm',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})