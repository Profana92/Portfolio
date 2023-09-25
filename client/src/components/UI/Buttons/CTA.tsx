import { GiMagicSwirl } from 'react-icons/gi'
interface Props {
  scrollHandler: () => void
  textContent: string
}
const CTA = (props: Props) => {
  return (
    <div className="bg-[#09022e8c] p-2 absolute bottom-7 rounded-lg shadow-xl hidden tall:block">
      <div
        className="flex gap-3 justify-center items-center text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange select-none clickable"
        onClick={props.scrollHandler}
      >
        <GiMagicSwirl
          className="text-pink text-5xl animate-[pulse_2s_infinite_1000ms]"
          title="Pulsing call to action icon, encouraging to scroll"
        />
        {props.textContent}
        <GiMagicSwirl
          className="text-pink text-5xl animate-pulse"
          title="Pulsing call to action icon, encouraging to scroll"
        />
      </div>
    </div>
  )
}

export default CTA
