// This is the reactquery hook for getting all news

import { client } from "utils/contentful"
import { EntryCollection, Entry, Asset } from "contentful"
import { useQuery } from "react-query"
import { NewsField, ResourceDocument } from "interfaces/contentfulTypes"

type Slug = string | string[]

// the news are fetch from contentful with the client.getEntries
export async function getDocuments(skipQuery: number) {
  const { items }: EntryCollection<ResourceDocument> = await client.getEntries({
    content_type: "resources",
    skip: skipQuery,
  })
  return items
}

// The hook to get all news post with useQuery
export default function useGetDocuments(skipQuery = 0) {
  return useQuery("Resources", () => getDocuments(skipQuery))
}
