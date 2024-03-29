import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
interface Props {
  decoration: 'none' | 'partial' | 'full'
  decorationInternal?: boolean
  textKey?: string
  textContent?: string
  additionalExternalClasses?: string
  additionalInternalClasses?: string
  link?: string
}
const Paragraph = (props: Props) => {
  if (props.decoration === 'none') {
    return (
      <p
        className={`my-5 max-w-xl leading-normal text-sm md:text-base ${
          props.additionalExternalClasses ? props.additionalExternalClasses : ''
        }`}
      >
        {props.textContent}
      </p>
    )
  }
  if (props.decoration === 'partial') {
    if (props.decorationInternal === true)
      return (
        <Trans i18nKey={props.textKey}>
          <p
            className={`my-5 max-w-xl leading-normal text-sm md:text-base ${
              props.additionalExternalClasses ? props.additionalExternalClasses : ''
            }`}
          >
            This is a sample text.
            <span
              className={`text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange font-black ${
                props.additionalInternalClasses ? props.additionalInternalClasses : ''
              }`}
            >
              Contact administrator
            </span>
            if You can see it!
          </p>
        </Trans>
      )
    return (
      <Trans i18nKey={props.textKey}>
        <p
          className={`font-medium my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange ${
            props.additionalExternalClasses ? props.additionalExternalClasses : ''
          }`}
        >
          This is a sample text.
          <span className={`text-white ${props.additionalInternalClasses ? props.additionalInternalClasses : ''}`}>
            Contact administrator
          </span>
          if You can see it!
        </p>
      </Trans>
    )
  }
  return (
    <p
      className={`my-5 max-w-xl leading-normal text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-br from-pink to-orange p-[1px] font-black ${
        props.additionalExternalClasses ? props.additionalExternalClasses : ''
      }`}
    >
      {props.link ? <Link to={props.link}>{props.textContent}</Link> : props.textContent}
    </p>
  )
}

export default Paragraph
