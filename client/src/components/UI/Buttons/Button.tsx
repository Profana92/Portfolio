import { Link } from 'react-router-dom'
interface Props {
  type: 'primary' | 'secondary'
  textSource: string
  link: string
}
const Button = (props: Props) => {
  if (props.type === 'primary')
    return (
      <Link
        className="inline-block w-40 bg-buttonOrange buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]"
        to={props.link}
      >
        {props.textSource}
      </Link>
    )
  return (
    <div className="inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
      <Link
        className="inline-block w-40 rounded-[5px] bg-buttonBlue text-center leading-[50px] text-sm md:text-base md:leading-[50px]"
        to="/my-work/#projects"
      >
        {props.textSource}
      </Link>
    </div>
  )
}

export default Button
