// This is the reactquery hook for getting all overviiew Post

import {client} from 'utils/contentful'
import {EntryCollection, Entry, Asset} from 'contentful'
import {useQuery} from 'react-query'

import {OverviewField} from 'interfaces/contentfulTypes'

async function getOverview() {
  const {items}: EntryCollection<OverviewField> = await client.getEntries({
    content_type: 'overview',
  })
  return items
}

// The hook
export default function useGetOverview() {
  return useQuery('overview', getOverview)
}
