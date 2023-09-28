interface Props {
  children: JSX.Element[] | JSX.Element
  additionalClasses?: string
}

const ContainerHalf = (props: Props) => {
  return <div className={`${props.additionalClasses} w-1/2 flex flex-col gap-6`}>{props.children}</div>
}

export default ContainerHalf
