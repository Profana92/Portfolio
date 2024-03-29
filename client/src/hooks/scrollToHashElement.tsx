import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToHashElement = () => {
  const location = useLocation()
  const hashElement = useMemo(() => {
    const hash = location.hash
    const removeHashCharacter = (str: string) => {
      const result = str.slice(1)
      return result
    }

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash))!
      return element
    } else {
      return null
    }
  }, [location])

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [location, hashElement])

  return null
}

export default ScrollToHashElement
