import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

const StoreContext = createContext()

export function StoreContextProvider({ children }) {
  const [like, setLike] = useState([])

  const handleLike = (id) => {
    if (like.includes(id) === false) {
      const newLike = [...like, id]
      setLike(() => newLike)
    } else {
      setLike(() => like.filter(itemId => itemId !== id))
    }
  }

  const isLiked = (id) => {
    return like.includes(id) === true
  }

  return (
    <StoreContext.Provider value={{ isLiked, handleLike }}>
      {children}
    </StoreContext.Provider>
  )
}

StoreContextProvider.propTypes = {
  children: PropTypes.array
}

export default StoreContext