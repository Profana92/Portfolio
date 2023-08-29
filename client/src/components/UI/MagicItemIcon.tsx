interface Props {
  description: string
  image: string
}
const MagicItemIcon = (props: Props) => {
  return (
    <div className="w-[100px] flex justify-center">
      <img src={props.image} alt={props.description} className="max-w-[100px]" />
    </div>
  )
}

export default MagicItemIcon
