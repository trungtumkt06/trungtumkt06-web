import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Tên tác giả',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      title: 'Ảnh đại diện (Avatar - Dùng cho trang chủ)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    // --- ĐÂY LÀ TRƯỜNG ẢNH MỚI CHO TRANG GIỚI THIỆU ---
    defineField({
      name: 'aboutImage',
      title: 'Ảnh trang giới thiệu (About Photo)',
      description: 'Ảnh phong cách sống, đang làm việc, xe cộ... dùng riêng cho trang Giới thiệu.',
      type: 'image',
      options: {
        hotspot: true, 
      },
    }),
    // ---------------------------------------------------

    defineField({
      name: 'bio',
      title: 'Tiểu sử (Bio)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image', // Vẫn giữ lấy avatar làm ảnh thu nhỏ trong danh sách Studio
    },
  },
})