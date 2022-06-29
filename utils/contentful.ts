import {ContentfulClientApi, createClient} from 'contentful'

const client: ContentfulClientApi = createClient({
  space: '',
  accessToken: '',
})

export {client}
