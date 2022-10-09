import { RichTextContent } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { FC, ReactNode } from "react"
import Image from "next/image"

type WrapperProps = {
  RichText: any
}

type Props = {
  children: ReactNode
}

const RichTextWrapper: FC<WrapperProps> = ({ RichText }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <span className='font-bold'>{text} </span>,
      [MARKS.ITALIC]: (text: any) => <span className='italic'>{text}</span>,
    },
    renderInlines: {
      [INLINES.ENTRY_HYPERLINK]: (node: any, children: ReactNode) => (
        <HyperLink>{children} </HyperLink>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: ReactNode) => (
        <Paragraph>{children}</Paragraph>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: ReactNode) => (
        <UnOrderedList>{children}</UnOrderedList>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: ReactNode) => (
        <OrderedList>{children}</OrderedList>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: ReactNode) => (
        <HeadingThree>{children}</HeadingThree>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { url } = node.data.target.fields.file
        const { height, width } = node.data.target.fields.file.details.image

        return (
          <Figure>
            <Image
              className='mb-4'
              src={"https:" + url}
              alt='Image'
              width={width}
              height={height}
            />
          </Figure>
        )
      },
    },
  }
  // console.log(RichText);
  return <>{documentToReactComponents(RichText, options)}</>
}

export default RichTextWrapper

const HyperLink = ({ children }: Props) => (
  <a className='text-blue-500'>{children} </a>
)
const Paragraph = ({ children }: Props) => (
  <p className='mb-4 text-lg '>{children}</p>
)
const Figure = ({ children }: Props) => <p className='d'>{children} </p>
const OrderedList = ({ children }: Props) => (
  <ol className='list-decimal'>
    <li>{children}</li>
  </ol>
)
const UnOrderedList = ({ children }: Props) => (
  <ul className='list-disc'>
    <li>{children}</li>
  </ul>
)
const HeadingThree = ({ children }: Props) => (
  <h3 className='text-lg capitalize underline font-bold'>{children} </h3>
)
const HyperList = ({ children }: Props) => <span className='s'>{children}</span>
