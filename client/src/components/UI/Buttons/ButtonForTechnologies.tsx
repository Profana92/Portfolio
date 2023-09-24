interface Props {
  activeCategory: string
  setActiveTechnology: any
  setActiveCategory: any
  textContent?: string
  categoryToSet: 'frontEnd' | 'backEnd' | 'design' | 'servers'
  technologyToSet: string
}
const ButtonForTechnologies = (props: Props) => {
  return (
    <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
      <button
        className={`inline-block w-40 ${
          props.activeCategory === props.categoryToSet ? 'bg-buttonOrange' : ' bg-buttonBlue'
        } buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
        onClick={() => {
          props.setActiveTechnology(props.technologyToSet)
          props.setActiveCategory(props.categoryToSet)
        }}
      >
        {props.textContent}
      </button>
    </div>
  )
}

export default ButtonForTechnologies
