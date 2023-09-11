interface Props {
  icon: () => JSX.Element
  heading: string
  paragraph: string
}
const Service = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center text-center max-w-[100%] md:max-w-[45%]">
      {<props.icon />}
      <h2 className="font-display text-2xl md:text-5xl font-medium text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange my-6 leading-[1.3!important]">
        {props.heading}
      </h2>
      <p className=" max-w-xl leading-normal text-sm md:text-base">{props.paragraph}</p>
    </div>
  )
}

export default Service
