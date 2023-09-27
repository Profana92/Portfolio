interface Props {
  children: JSX.Element[] | JSX.Element
}

const ContainerHalf = ({ children }: Props) => {
  return <div className="w-1/2 flex flex-col gap-6">{children}</div>
}

export default ContainerHalf
