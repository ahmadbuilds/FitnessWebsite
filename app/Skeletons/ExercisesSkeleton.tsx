import React from 'react'

const ExercisesSkeleton = () => {
  return (
    <div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-white animate-pulse px-10 py-10 sm:px-14 sm:py-14 flex flex-col gap-10 items-center justify-center border-t-8 border-red-500 rounded-sm h-[400px]"
          >
            <div className="w-[300px] h-[300px] bg-slate-100 rounded-lg"></div>
            <div className="flex gap-4">
              <div className="h-8 w-20 bg-slate-100 rounded-full"></div>
              <div className="h-8 w-20 bg-slate-100 rounded-full"></div>
            </div>
            <div className="h-6 bg-slate-100 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExercisesSkeleton
