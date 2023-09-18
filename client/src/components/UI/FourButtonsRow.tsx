import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  activeCategory: string
  setactiveCategory: (arg: string) => void
}
const FourButtonsRow = (props: Props) => {
  const { t } = useTranslation()
  return (
    <div className=" my-6 flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-6">
      <AnimatePresence>
        <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
          <motion.button
            animate={props.activeCategory === 'frontEnd' ? { background: '#B44F22' } : { background: '#112389' }}
            className={`inline-block w-40 $ buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
            onClick={() => {
              props.setactiveCategory('frontEnd')
            }}
          >
            {t('mySkills.buttonOne')}
          </motion.button>
        </div>
      </AnimatePresence>
      {/* <AnimatePresence>
        <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
          <motion.button
            animate={props.activeCategory === 'backEnd' ? { background: '#B44F22' } : { background: '#112389' }}
            className={`inline-block w-40 $ buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
            onClick={() => {
              props.setactiveCategory('backEnd')
            }}
          >
            {t('mySkills.buttonTwo')}
          </motion.button>
        </div>
      </AnimatePresence> */}
      <AnimatePresence>
        <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
          <motion.button
            animate={props.activeCategory === 'design' ? { background: '#B44F22' } : { background: '#112389' }}
            className={`inline-block w-40 $ buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
            onClick={() => {
              props.setactiveCategory('design')
            }}
          >
            {t('mySkills.buttonThree')}
          </motion.button>
        </div>
      </AnimatePresence>
      {/* <AnimatePresence>
        <div className="w-[162px] inline-block rounded-[5px] bg-gradient-to-r from-pink to-orange p-[1px]">
          <motion.button
            animate={props.activeCategory === 'servers' ? { background: '#B44F22' } : { background: '#112389' }}
            className={`inline-block w-40 $ buttonsFix:mr-2 md:mr-8 text-center leading-[50px] rounded-[5px] text-sm md:text-base md:leading-[50px]`}
            onClick={() => {
              props.setactiveCategory('servers')
            }}
          >
            {t('mySkills.buttonFour')}
          </motion.button>
        </div>
      </AnimatePresence> */}
    </div>
  )
}

export default FourButtonsRow
