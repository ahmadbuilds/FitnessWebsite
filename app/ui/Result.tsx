import React from 'react'
import { lustina } from '../lib/font'
import { fetchTopThreeExercises } from '../lib/definition'
const Result = () => {
    fetchTopThreeExercises();
  return (
    <div className='bg-red-300 m-4 p-4'>
      <h1 className={`${lustina.className} antialiased text-5xl font-bold`}>Showing Results</h1>
        <div>
        </div>
    </div>
  )
}

export default Result
