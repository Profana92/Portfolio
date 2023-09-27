import { FieldErrors } from 'react-hook-form'
import { IconContext } from 'react-icons'
import { MdErrorOutline } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
interface Props {
  errors: { [key: string]: { type: string; message: string; ref: HTMLInputElement } } | FieldErrors<Inputs>
  textContent: string
  fieldName: string
  condition?: string
  type?: string
  emailRegexTestResult?: boolean
}
const FormErrorField = (props: Props) => {
  if (props.type === 'regexError') {
    return (
      <AnimatePresence>
        {props.emailRegexTestResult === false && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex gap-3 items-center text-sm">
              <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
                <div>
                  <MdErrorOutline />
                </div>
              </IconContext.Provider>
              {props.textContent}dsds
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }
  return (
    <AnimatePresence>
      {props.errors[props.fieldName]?.type === props.condition && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="flex gap-3 items-center text-sm">
            <IconContext.Provider value={{ className: 'text-3xl text-pink' }}>
              <div>
                <MdErrorOutline />
              </div>
            </IconContext.Provider>
            {props.textContent}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FormErrorField
