import {Asset, Entry, EntryFields, RichTextContent} from 'contentful'

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
  documentName: Asset
}

export interface ContentfulRichText extends Document {}
