import { Trans } from 'react-i18next'
interface Props {
  decoration: 'none' | 'partial'
  transKey?: string
  textContent?: string
}
const HeadingSecondary = (props: Props) => {
  if (props.decoration === 'partial')
    return (
      <Trans i18nKey={props.transKey}>
        <h2 className="font-display text-2xl md:text-5xl font-medium lg:max-w-xl my-5">
          This is a dummy text. If you can see it contact
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange">
            {' '}
            The Administrator
          </span>
        </h2>
      </Trans>
    )
  return <h2 className="font-display text-2xl md:text-5xl font-medium lg:max-w-xl my-5">{props.textContent}</h2>
}

export default HeadingSecondary
