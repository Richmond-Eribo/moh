// hooks for fetching images from contentful

import { client } from "utils/contentful"
import { EntryCollection, Entry, Asset } from "contentful"
import { useQuery } from "react-query"
import {
  ImageField,
  NewsField,
  ResourceDocument,
} from "interfaces/contentfulTypes"

// the news are fetch from contentful with the client.getEntries
async function getImages(entryID: string) {
  const { fields }: Entry<ImageField> = await client.getEntry(entryID)
  const { title, pictures } = fields
  const picturesField = pictures.map((pic) => pic.fields.file.url)
  return { title, picturesField }
}

// The hook to get all news post with useQuery
export default function useGetHomepageSlides(entryID: string) {
  return useQuery("Slides", () => getImages(entryID))
}
