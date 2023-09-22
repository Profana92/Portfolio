import { Trans } from 'react-i18next'
interface Props {
  decorationInternal: boolean
  textSource: string
  additionalExternalClasses?: string
  additionalInternalClasses?: string
}
const HeadingMain = (props: Props) => {
  if (props.decorationInternal === true)
    return (
      <Trans i18nKey={props.textSource}>
        <h1
          className={`font-display text-2xl md:text-5xl font-medium max-w-xl text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange leading-[1.3!important] ${props.additionalExternalClasses}`}
        >
          This is a sample text.
          <span className={`text-white ${props.additionalInternalClasses}`}>Contact administrator</span>
          if You can see it!
        </h1>
      </Trans>
    )
  else
    return (
      <Trans i18nKey={props.textSource}>
        <h1
          className={`font-display text-2xl md:text-5xl font-medium max-w-xl leading-[1.3!important] text-white  ${props.additionalExternalClasses}`}
        >
          This is a sample text.
          <span
            className={`text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange ${props.additionalInternalClasses}`}
          >
            Contact administrator
          </span>
          if You can see it!
        </h1>
      </Trans>
    )
}

export default HeadingMain
