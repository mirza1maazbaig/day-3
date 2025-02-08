import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Generates a URL for a given Sanity image source using the configured builder.
 *
 * @param source - The Sanity image source object to generate a URL for.
 * @returns The generated URL for the specified image source.
 */

/******  6b70571d-c3c5-4fa5-a2b9-6370cfdba0e7  *******/export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}