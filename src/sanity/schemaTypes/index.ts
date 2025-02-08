import { type SchemaTypeDefinition } from 'sanity'
import products from './product'
import orders from './order'
// import shippingForm from './shippingForm'
import contactForm from "./contact"
import review from './reviews'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,contactForm,orders,review],
}