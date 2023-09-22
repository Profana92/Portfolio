interface Props {
  textContent: string
}
const ParagraphUppercase = (props: Props) => {
  return <p className="uppercase font-light text-xs text-[#ffffffBF]">{props.textContent}</p>
}

export default ParagraphUppercase
