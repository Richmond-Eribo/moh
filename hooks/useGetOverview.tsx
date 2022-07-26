import { client } from 'utils/contentful';
import { EntryCollection, Entry, Asset } from 'contentful';
// import {Query} from 'react-query'
import { useQuery } from 'react-query';

import { OverviewField } from 'interfaces/contentfulTypes';

async function getOverview() {
  const { items }: EntryCollection<OverviewField> = await client.getEntries({
    content_type: 'overview',
  });
  return items;
}

export default function useGetOverview() {
  return useQuery('overview', getOverview);
}
