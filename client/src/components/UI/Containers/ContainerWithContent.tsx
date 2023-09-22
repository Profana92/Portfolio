interface Props {
  children: JSX.Element[]
}

const ContainerWithContent = ({ children }: Props) => {
  return (
    <div className="flex max-w-[1640px] mx-auto gap-12 justify-between items-center p-12 flex-col lg:flex-row text-center lg:text-left">
      {children}
    </div>
  )
}

export default ContainerWithContent
