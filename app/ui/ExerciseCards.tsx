'use client'
import React, { useEffect, useState } from 'react'
import { Exercise, fetchAllExercises, fetchAllExercises_Query } from '../lib/definition'
import CardSkeleton from '../Skeletons/CardSkeleton';
import Image from 'next/image';
import Link from 'next/link';
const ExerciseCards = ({query,start,CPP}:{query:string,start:number,CPP:number}) => {
    const [result,setResult]=useState<Exercise[]>([]);
    const [loading,setLoading]=useState(true);
    const index=(start-1)*CPP;
  useEffect(()=>{
    const All_exercises=async()=>{
        try{
            setLoading(true);
            if(query)
            {
                const response=await fetchAllExercises_Query(query,index);
                const response1=response?JSON.parse(response):[];
                if(Array.isArray(response1))
                    {
                        setResult(response1);
                        console.log("Data returned");
                    }
                    else{
                        setResult([]);
                    }
                return response1;
            }
            else{
                const response=await fetchAllExercises(index);
                const response1=response?JSON.parse(response):[];
                if(Array.isArray(response1))
                {
                    setResult(response1);
                    console.log("Data returned");
                }
                else{
                    setResult([]);
                }
                return response1;
            }
        }catch(error)
        {
            console.log("failed to fetch the result!! "+error);
            setResult([]);
        }
        finally{
            setLoading(false);
        }
    }
    All_exercises();
  },[query,index]);
    return (
    loading?<CardSkeleton/>:
    <div className='mx-6 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  items-stretch '>
    {
        result.map((pro)=>{
            return(
            <Link key={pro.id} 
            href={`/Exercise/${pro.id}/CardDetails`}
            className='bg-white flex flex-col flex-wrap gap-7 p-4 border-t-4 border-red-500 outline-none hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-90 hover:cursor-pointer'>
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
            </Link>
            )
        })
    }
    </div>
  )
}

export default ExerciseCards
