import Link from 'next/link'
import React from 'react'
import Movie from '../pages/movie/[movie]'

const ModifyButton = () => {


  const handleOnClick = () => {
    console.log("clicked")
    
  };
  return (

    
    <div>



<Link  href="/modify">
        <button  className=' text-white bg-blue-300 rounded-lg px-3 py-2 hover '  
        onClick={handleOnClick}
        
      
        > Modify Review</button>

        </Link>
        
        



    </div>
  )
}

export default ModifyButton