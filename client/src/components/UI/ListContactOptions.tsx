interface Props {
  elements: string[]
}
const ListContactOptions = (props: Props) => {
  return (
    <ul className="text-left list-disc font-light leading-normal list-inside text-sm md:text-base">
      {props.elements.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  )
}

export default ListContactOptions
