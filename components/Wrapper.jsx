import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className="grid grid-cols-4 gap-2 m-2 max-w-100% overflow-hidden">
        {children}
    </div>
  )
}

export default Wrapper