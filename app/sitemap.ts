import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://trungtumkt06.io.vn',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://trungtumkt06.io.vn/studio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Bạn có thể thêm các link khác ở đây
  ]
}