import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './product'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { projectType } from './project'
import { productCategoryType } from './productCategory'
import { projectCategoryType } from './projectCategory'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, productType, projectType, productCategoryType, projectCategoryType],
}
