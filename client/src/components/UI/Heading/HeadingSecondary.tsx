import { Trans } from 'react-i18next'
interface Props {
  decoration: 'none' | 'partial' | 'full'
  transKey?: string
  textContent?: string
  additionalClasses?: string
}
const HeadingSecondary = (props: Props) => {
  if (props.decoration === 'partial')
    return (
      <Trans i18nKey={props.transKey}>
        <h2
          className={`font-display text-2xl md:text-5xl font-medium lg:max-w-xl my-5 leading-[1.3!important] ${props.additionalClasses}`}
        >
          This is a dummy text. If you can see it contact
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">The Administrator</span>
        </h2>
      </Trans>
    )
  if (props.decoration === 'full')
    return (
      <h2 className="font-display text-2xl md:text-5xl font-medium text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange my-6 leading-[1.3!important]">
        {props.textContent}
      </h2>
    )
  return <h2 className="font-display text-2xl md:text-5xl font-medium lg:max-w-xl my-5">{props.textContent}</h2>
}

export default HeadingSecondary
