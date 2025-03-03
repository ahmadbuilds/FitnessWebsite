'use client'
import React, {  useEffect, useState } from 'react'
import Image from 'next/image'
import { lustina } from '../lib/font'
import { Exercise } from '../lib/definition'
import { fetchTopThreeExercises } from '../lib/definition'
import ExercisesSkeleton from '../Skeletons/ExercisesSkeleton'
const Result = ({query}:{query:string}) => {
  const [ResponseResult,setResponse]=useState<Exercise[]>([]);
  const [loading,setLoading]=useState(true);
    useEffect(()=>{
      const response=async()=>{
        setLoading(e=>!e);
        try{
          const fetched=await fetchTopThreeExercises(query);
          const fetchedResults=fetched?JSON.parse(fetched):[];
          //console.log(fetchedResults[1]);
          setResponse(fetchedResults);
        }catch(error)
        {
          console.log("Failed to Fetch the Results fro the Query!! "+error);
        }
        finally{
          setLoading(false);
        }
      }
      response();
    },[query]);
  return (
    <>
    <div className='m-4 p-4'>
      <h1 className={`${lustina.className} antialiased text-5xl font-bold`}>Showing Results</h1>
      {
        loading?<ExercisesSkeleton/>:
        <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-stretch'>
          {
            ResponseResult.map((pro)=>{
              return(
                <div key={pro.id} className='bg-white flex flex-col flex-wrap gap-7 p-4 border-t-4 border-red-500 outline-none '>
                  <div className='flex items-center justify-center'>
                    <Image
                    src={pro.gifUrl}
                    width={300}
                    height={300}
                    alt='Video of Exercise'
                    loading='lazy'
                    unoptimized
                    />
                  </div>
                  <div className='flex gap-5 items-center'>
                    <p className='bg-red-200 text-white py-2 px-4 rounded-full md:text-base md:font-semibold'>{pro.target}</p>
                    <p className='bg-yellow-300 text-white py-2 px-4 rounded-full'>{pro.secondaryMuscles[0]}</p>
                  </div>
                  
                  <p className='font-bold text-sm lg:text-xl'>{pro.name}</p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
    </>
  )
}

export default Result
