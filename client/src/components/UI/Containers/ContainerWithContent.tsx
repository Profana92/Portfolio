interface Props {
  children: JSX.Element[] | JSX.Element
  additionalClasses?: string
}

const ContainerWithContent = ({ children, additionalClasses }: Props) => {
  if (additionalClasses)
    return (
      <div
        className={`flex w-full max-w-[1440px] mx-auto gap-0 justify-between items-center p-6 md:p-12 flex-col lg:flex-row text-center lg:text-left ${additionalClasses}`}
      >
        {children}
      </div>
    )
  return (
    <div
      className={`flex w-full max-w-[1440px] mx-auto gap-0 justify-between items-center p-6 md:p-12 flex-col lg:flex-row text-center lg:text-left`}
    >
      {children}
    </div>
  )
}

export default ContainerWithContent
