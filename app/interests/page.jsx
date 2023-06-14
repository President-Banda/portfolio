import React from 'react'

const Interests = () => {
  return (
    <>
      <div className="grid-flow-row lg:grid lg:grid-cols-2 gap-x-5 col-span-3 justify-center m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto'] glassmorphic-container">

      <div className="col-span-1 row-span-7 text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed h-fit md:mr-20 md:bg-sakura">
        <div className='md:glassmorphic-container scale-110 rounded-md md:background-image-div-intellectual'>
          <div className='md:text-4xl md:text-white font-bold text-center'>Intellectual</div>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Programming</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Automation</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Reading</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Research</li>
        </div>
      </div>


      <div className="col-span-1 row-span-8 h-fit text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed md:ml-20 md:bg-sakura">
        <div className='md:glassmorphic-container scale-110 rounded-md md:background-image-div-casual'>
          <div className='md:text-4xl md:text-white font-bold text-center'>Casual</div>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Movies</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Gaming</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Anime</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Music?</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Customization/Configuration</li>
        </div>
        
      </div>


      

      <div className="col-span-1 row-span-8 col-start-1 text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed md:h-72 md:-mt-14 md:mr-52 md:bg-sakura">
        <div className='md:glassmorphic-container scale-110 rounded-md md:background-image-div-physical'>
          <div className='md:text-4xl md:text-white font-bold text-center'>Physical</div>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Gym</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Volleyball</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Football</li>
        </div>
      </div>

      <div className="col-span-1 col-start-2 row-span-8 text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed md:mt-2 md:mr-52 md:bg-sakura">
        <div className='md:glassmorphic-container scale-110 rounded-md md:background-image-div-misc'>
          <div className='md:text-4xl md:text-white font-bold text-center'>Misc.</div>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Twitter</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Cleaning</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>SLEEP</li>
        </div>
        <div className='glassmorphic-container scale-90'>
          <li>Tweaking</li>
        </div>
        
    {/* Add more content here */}
      </div>
      </div>
       
    
      
    </>
      
  )
}

export default Interests