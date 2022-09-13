import React from 'react'
//import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        {/* <a href="{CV}">Download CV</a> */}
        <a href="../../assets/cv.pdf" download='Albert_Banda_cv.pdf' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA