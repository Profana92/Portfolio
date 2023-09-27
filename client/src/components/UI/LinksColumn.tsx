import { Link } from 'react-router-dom'
interface Props {
  elements: { link: string; textContent: string }[]
}
const LinksColumn = (props: Props) => {
  return (
    <div className="w-1/4 flex flex-col">
      {props.elements.map((element, index) => {
        return (
          <Link key={index} to={element.link} className={index === 0 ? 'text-orange' : ''}>
            {element.textContent}
          </Link>
        )
      })}
    </div>
  )
}

export default LinksColumn
