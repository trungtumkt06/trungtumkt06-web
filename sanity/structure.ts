import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Hệ thống Quản trị') // Tiêu đề tổng quát
    .items([
      // NHÓM 1: BLOG & NỘI DUNG
      S.documentTypeListItem('post').title('Tất cả bài viết'),
      S.documentTypeListItem('category').title('Danh mục bài viết'),
      S.documentTypeListItem('author').title('Tác giả'),
      
      S.divider(), // Vạch ngăn cách

      // NHÓM 2: CỬA HÀNG SẢN PHẨM
      S.documentTypeListItem('product').title('Sản phẩm số'),
      S.documentTypeListItem('productCategory').title('Danh mục sản phẩm'),
      
      S.divider(),

      // NHÓM 3: PORTFOLIO
      S.documentTypeListItem('project').title('Dự án (Portfolio)'),
      S.documentTypeListItem('projectCategory').title('Danh mục dự án'),

      S.divider(),

      // TỰ ĐỘNG LẤY CÁC MỤC CÒN LẠI (Nếu sau này bạn thêm schema mới)
      ...S.documentTypeListItems().filter(
        (item) => 
          item.getId() && 
          !['post', 'category', 'author', 'product', 'project', 'productCategory', 'projectCategory'].includes(item.getId()!)
      ),
    ])