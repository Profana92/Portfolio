interface Props {
  type?: 'textArea' | 'submit'
  textContent?: string
  fieldName?: string
  register: any
}
const InputForm = (props: Props) => {
  if (props.type === 'textArea')
    return (
      <div className="p-[1px] bg-gradient-to-br from-pink to-orange rounded-sm flex flec-col">
        <textarea
          className="w-full bg-white rounded-sm text-xs p-2 text-gray-700 h-52"
          placeholder={props.textContent}
          {...props.register(`${props.fieldName}`, { required: true })}
        />
      </div>
    )
  if (props.type === 'submit')
    return (
      <input
        type="submit"
        value={props.textContent}
        className="ml-auto inline-block w-40 bg-buttonOrange text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px] lg:leading-[50px] "
      />
    )
  return (
    <div className="p-[1px] bg-gradient-to-br from-pink to-orange rounded-sm flex flec-col">
      <input
        className="w-full bg-white rounded-sm text-xs px-2 h-10 text-gray-700"
        placeholder={props.textContent}
        {...props.register(`${props.fieldName}`, { required: true, maxLength: 20 })}
      />
    </div>
  )
}

export default InputForm
