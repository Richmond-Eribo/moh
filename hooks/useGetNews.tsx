// This is the reactquery hook for getting all news

import {client} from 'utils/contentful'
import {EntryCollection, Entry, Asset} from 'contentful'
import {useQuery} from 'react-query'
import {NewsField} from 'interfaces/contentfulTypes'

// the news are fetch from contentful with the client.getEntries
async function getNews() {
  const {items}: EntryCollection<NewsField> = await client.getEntries({
    content_type: 'blog',
  })
  return items
}

// The hook
export default function useGetNews() {
  return useQuery('News', getNews)
}
