import { Asset, Entry, EntryFields, RichTextContent } from "contentful"

export interface OverviewField {
  title: string
  writeUp: any
  thumbnail: Asset
  description: string
}

export interface NewsField {
  title: string
  writeUp: any
  thumbnail: Asset
  slug: string
  date: Date
}
export interface ResourceDocument {
  name: string
  tag: string
  publication: Asset
}

export interface ImageField {
  title: string
  pictures: Asset[]
}

export interface picturesField {
  title: string
  picturesField: string[]
}

export interface ContentfulRichText extends Document {}
