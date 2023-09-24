import HeadingSecondary from './Heading/HeadingSecondary'
import Paragraph from './Paragraph/Paragraph'

interface Props {
  icon: () => JSX.Element
  heading: string
  paragraph: string
}
const Service = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center text-center max-w-[100%] md:max-w-[45%]">
      {<props.icon />}
      <HeadingSecondary decoration="full" textContent={props.heading} />
      <Paragraph decoration="none" textContent={props.paragraph} />
    </div>
  )
}

export default Service
