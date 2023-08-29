import { Trans } from 'react-i18next'
interface Props {
  sectionDescription: string
  sectionParagraph: string
  i18nKey: string
}
const TextBlockWithDescription = (props: Props) => {
  return (
    <div>
      <p className="uppercase font-light text-xs text-[#ffffffBF]">{props.sectionDescription}</p>
      <Trans i18nKey={props.i18nKey}>
        <h2 className="font-display text-2xl md:text-5xl font-medium lg:max-w-xl my-5">
          This is a dummy text. If you can see it contact
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">The Administrator</span>
        </h2>
      </Trans>
      <p className="mt-5 lg:max-w-xl leading-normal text-sm md:text-base">{props.sectionParagraph}</p>
    </div>
  )
}

export default TextBlockWithDescription
