import React from 'react'

const page = ( {params} ) => {
    const slug = params.slug;
  return (
    <div>page : {slug }</div>
  )
}

export default page
