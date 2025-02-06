import { type SchemaTypeDefinition } from 'sanity'

import Products from '@/app/products/page'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
