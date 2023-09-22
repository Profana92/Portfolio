import { Trans } from 'react-i18next'
interface Props {
  decorationInternal: boolean
  textSource: string
  additionalExternalClasses?: string
  additionalInternalClasses?: string
}
const Paragraph = (props: Props) => {
  if (props.decorationInternal === true)
    return (
      <Trans i18nKey={props.textSource}>
        <p className={`my-5 max-w-xl leading-normal text-sm md:text-base ${props.additionalExternalClasses}`}>
          This is a sample text.
          <span
            className={`text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange font-black${props.additionalInternalClasses}`}
          >
            Contact administrator
          </span>
          if You can see it!
        </p>
      </Trans>
    )
  return (
    <Trans i18nKey={props.textSource}>
      <p
        className={`font-medium my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange ${props.additionalExternalClasses}`}
      >
        This is a sample text.
        <span className={`text-white ${props.additionalInternalClasses}`}>Contact administrator</span>
        if You can see it!
      </p>
    </Trans>
  )
}

export default Paragraph
