import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'

type TElements = {
  link?: string
  textContent: string
  target?: string
}

interface Props {
  elements: TElements[]
}

const ListContactOptions = (props: Props) => {
  return (
    <ul className="text-left list-disc font-light leading-normal list-inside text-sm md:text-base">
      {props.elements.map((element, index) => {
        if (element.link !== '' && element.link !== undefined) {
          return (
            <Trans i18nKey={element.textContent} key={index}>
              <li>
                This is a dummy text. If you can see this
                <Link
                  to={element.link}
                  className="text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange font-black"
                  target={element.target}
                >
                  contact the administrator
                </Link>
              </li>
            </Trans>
          )
        }
        return <li key={index}>{element.textContent}</li>
      })}
    </ul>
  )
}

export default ListContactOptions
