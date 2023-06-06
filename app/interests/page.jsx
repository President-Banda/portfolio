import React from 'react'

const Interests = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 col-span-3 justify-center m-2 border border-solid border-sakura-light rounded-lg leading-relaxed p-4 font-['Roboto'] glassmorphic-container">

      <div className="col-span-1 row-span-7 text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed h-fit bg-sakura mr-20">
        <div className='glassmorphic-container background-image-div-one scale-110 rounded-md'>
          <div className='text-2xl text-black font-bold text-center'>Intellectual</div>
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


      <div className="col-span-1 row-span-8 h-fit text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed bg-sakura ml-20">
        <div className='glassmorphic-container background-image-div-three scale-110 rounded-md'>
          <div className='text-2xl text-black font-bold text-center'>Casual</div>
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


      

      <div className="col-span-1 row-span-8 col-start-1 text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed h-72 bg-sakura -mt-14 mr-52">
        <div className='glassmorphic-container background-image-div-two scale-110 rounded-md'>
          <div className='text-2xl text-black font-bold text-center'>Physical</div>
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

      <div className="col-span-1 col-start-2 row-span-8 text-justify border border-solid border-sakura-light rounded-lg p-1 leading-relaxed bg-sakura mt-2 mr-52">
        <div className='glassmorphic-container background-image-div-three scale-110 rounded-md'>
          <div className='text-2xl text-black font-bold text-center'>Misc.</div>
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