// This is the reactquery hook for getting all news

import { client } from "utils/contentful"
import { EntryCollection, Entry, Asset } from "contentful"
import { useQuery } from "react-query"
import { NewsField, OverviewField } from "interfaces/contentfulTypes"

type Slug = string | string[]

// the news are fetch from contentful with the client.getEntries
export async function getMda(skipQuery: number, limit: number) {
  const { items }: EntryCollection<NewsField> = await client.getEntries({
    content_type: "mda",
    limit: limit,
    skip: skipQuery,
  })
  return items
}

// Get single News for the News Page.
export async function getSingleMda(slug: Slug) {
  const { items }: EntryCollection<NewsField> = await client.getEntries({
    content_type: "mda",
    "fields.slug": slug,
  })
  return items[0]
}

// The hook to get all news post with useQuery
export default function useGetMda(skipQuery = 0, limit = 8) {
  return useQuery("MDA", () => getMda(skipQuery, limit))
}
