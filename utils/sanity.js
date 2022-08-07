import {
  createCurrentUserHook,
  createClient,
} from "next-sanity"

import createImageUrlBuilder from '@sanity/image-url'

// Standard sanity config
// Don't forget token, to get a preview client and authenticated client
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.token,

};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);