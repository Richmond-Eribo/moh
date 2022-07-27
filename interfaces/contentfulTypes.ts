import {Asset, Entry, EntryFields, RichTextContent} from 'contentful'

export interface OverviewField {
  title: string
  writeUp: RichTextContent
  thumbnail: Asset
  description: string
}
