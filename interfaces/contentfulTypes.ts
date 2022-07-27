import {Asset, Entry, EntryFields, RichTextContent} from 'contentful'

export interface OverviewField {
  title: string
  writeUp: any
  thumbnail: Asset
  description: string
}

export interface ContentfulRichText extends Document {}
