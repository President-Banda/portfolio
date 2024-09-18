import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className="grid grid-cols-4 grid-rows-10 gap-2 m-2 overflow-hidden">
        {children}
    </div>
  )
}

export default Wrapper