import React from 'react'

const CardSkeleton = () => {
  return (
    <div>
      <div className="p-4 my-4 grid grid-cols-4 gap-2 md:gap-12 sm:gap-4 items-center">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="bg-white animate-pulse px-10 py-10 sm:px-14 sm:py-14 flex flex-col gap-10 items-center justify-center border-t-8 border-red-500 rounded-sm"
        >
          <div className="w-[50px] h-[50px] bg-slate-100 "></div>
          <div className="h-6 bg-slate-100 rounded w-3/4"></div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default CardSkeleton
