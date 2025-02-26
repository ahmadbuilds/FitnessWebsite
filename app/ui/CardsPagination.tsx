import React from 'react'
import Image from 'next/image'
const CardsPagination = ({current,handlePrevious,handleNext,TotalPages,Loading}:{current:number,handlePrevious:()=>void,handleNext:()=>void,TotalPages:number,Loading:boolean}) => {
  return (
    <div className='flex items-center justify-end gap-4 pr-6'>
      <button title='previous button' className='hover:scale-110 hover:transition-transform hover:duration-500'
      onClick={handlePrevious}
      disabled={(current==1)|| (Loading)}
      ><Image
        src={'/left-arrow.png'}
        alt='Left arrow'
        width={40}
        height={40}
      /></button>
      <button title='next button' className='hover:scale-110 hover:transition-transform hover:duration-500'
        onClick={handleNext}
        disabled={(current==TotalPages) || (Loading)}
      ><Image
        src={'/right-arrow.png'}
        alt='Left arrow'
        width={40}
        height={40}
      /></button>
    </div>
  )
}

export default CardsPagination
