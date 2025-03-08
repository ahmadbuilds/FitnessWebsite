'use client';
import React, { useEffect, useState } from 'react'
import { fetchExerciseById } from '@/app/lib/definition';
import { ExerciseID } from '@/app/lib/definition';
import DetailSkeleton from '@/app/Skeletons/DetailSkeleton';
import Image from 'next/image';
import { lustina } from '@/app/lib/font';
import VideosCard from '@/app/ui/VideosCard';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Exercises Details",
    description: "A fitness website just for showing the desired Workout",
  };
const Page =(props:{params:Promise<{id:string}>}) => {
    const [result,setResult]=useState<ExerciseID | null>(null);
    const [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            const params=await props.params;
            const id=params.id;
            try{
                const response=await fetchExerciseById(id);
                const data=response?JSON.parse(response):null;
                //console.log(data[0].name);
                setResult(data);
            }catch(error)
            {
                console.log("Failed to fetch the Data for videos and id "+error);
            }
            finally{
                setLoading(false);
            }

        }
        fetchData();
    },[props.params]);

    return (
    <>
    {
        loading?<DetailSkeleton/>:
        result?(
        <>
            <div className='bloc lg:flex lg:gap-10 mx-5 my-20 w-[calc(100%-2.5rem-10px)]'>
            <div className='p-5 lg:w-1/2 flex justify-center'>
                    <Image
                        src={result?.gifUrl}
                        alt='Exercise Picture'
                        width={650}
                        height={650}
                        
                    />
                </div>
                <div className='flex flex-col gap-5 py-10  lg:w-1/2'>
                    <p className={`${lustina.className} antialiased text-6xl font-bold text-wrap `}>{result.name}</p>
                    <p className={`${lustina.className} antialiased text-lg text-gray-500 font-normal text-justify`}>{result.instructions[0]}</p>    
                    <p className={`${lustina.className} antialiased text-lg text-gray-500 font-normal text-justify`}>{result.instructions[1]}</p>    
                    <div className='flex flex-col gap-7'>
                        <div className='flex gap-3 items-center'>
                            <Image
                                src={'/body-part.png'}
                                alt='Body part name'
                                width={65}
                                height={65}
                                className='bg-orange-100 rounded-full p-2'
                            />
                            <p className={`${lustina.className} antialiased text-2xl font-normal `}>{result.bodyPart}</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Image
                                src={'/target.png'}
                                alt='Target name'
                                width={65}
                                height={65}
                                className='bg-orange-100 rounded-full p-2'
                            />
                            <p className={`${lustina.className} antialiased text-2xl font-normal `}>{result.target}</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Image
                                src={'/equipment.png'}
                                alt='Equipment name'
                                width={65}
                                height={65}
                                className='bg-orange-100 rounded-full p-2'
                            />
                            <p className={`${lustina.className} antialiased text-2xl font-normal `}>{result.equipment}</p>
                        </div>
                    </div>
                
                </div>  
            </div>
            <div className={`${lustina.className} antialiased text-4xl font-bold mx-5 my-20`}>
                Watch <span className='text-red-500'>{result.name}</span> exercise videos
            </div>
           <VideosCard name={result.name}/>
        </>
        
        ):(
            <p className='text-lg font-semibold text-center'>No Exercise Found</p>
        )
    }
        
    </>
  )
}

export default Page
