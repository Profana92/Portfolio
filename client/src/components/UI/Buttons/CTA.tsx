import { GiMagicSwirl } from 'react-icons/gi'
interface Props {
  scrollHandler: () => void
  textContent: string
}
const CTA = (props: Props) => {
  return (
    <div
      className="hidden tall:flex gap-3 justify-center items-center absolute bottom-7 text-transparent bg-gradient-to-br bg-clip-text from-pink to-orange select-none clickable"
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
  )
}

export default CTA
