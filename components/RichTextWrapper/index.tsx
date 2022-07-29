import {RichTextContent} from 'contentful'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {BLOCKS, INLINES, MARKS} from '@contentful/rich-text-types'
import {FC, ReactNode} from 'react'
import Image from 'next/image'

type WrapperProps = {
  RichText: any
}

type Props = {
  children: ReactNode
}

const RichTextWrapper: FC<WrapperProps> = ({RichText}) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <span className='font-bold'>{text} </span>,
      [MARKS.ITALIC]: (text: any) => <span className='italic'>{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => (
        <Paragraph>{children} </Paragraph>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => (
        <UnOrderedList>{children}</UnOrderedList>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const {url} = node.data.target.fields.file

        return (
          <Figure>
            <Image
              className='mb-4'
              src={'https:' + url}
              alt='Image'
              width={350}
              height={350}
            />
          </Figure>
        )
      },
    },
  }
  // console.log(RichText);
  return (
    <div>
      {documentToReactComponents(RichText, options)}
      {/* <p>this is the overview NextPage</p> */}
    </div>
  )
}

export default RichTextWrapper

const Paragraph = ({children}: Props) => <p className=''>{children}</p>
const Figure = ({children}: Props) => <p className='d'>{children} </p>
const OrderedList = ({children}: Props) => <ol className='d'>{children}</ol>
const UnOrderedList = ({children}: Props) => <ul className=''>{children} </ul>
const HyperList = ({children}: Props) => <span className='s'>{children}</span>
