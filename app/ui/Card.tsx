'use client'
import React, { useEffect, useState } from 'react';
import { fetchBodyPartList } from '../lib/definition';
import { lustina } from '../lib/font';
import Image from 'next/image';
import CardsPagination from './CardsPagination';
import CardSkeleton from '../Skeletons/CardSkeleton';
const Card = ({Result,ScrollResult}:{Result:(value:string)=>void,ScrollResult:()=>void}) => {
  const [BodyParts,setBodyParts]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [loading,setLoading]=useState(true);
  const cardsPerPage=4;
  useEffect(()=>{
    const response =async ()=>{
      try{
        const body=await fetchBodyPartList();
        const parsed=body ? JSON.parse(body):[];
        parsed.unshift('All');
        //console.log(parsed.length);
        setBodyParts(parsed);
      }catch(error)
      {
        console.log("Failed to fetch the data",error);
      }
      finally{
        setLoading(false);
      }
    }
    response();
  },[]);
  const totalPages=Math.ceil(BodyParts.length/cardsPerPage);
  const index=(currentPage-1)*cardsPerPage;
  const filteredCards=BodyParts.slice(index,index+cardsPerPage);
  const handleAnimation=(page:number)=>{
    setLoading(true);
    setCurrentPage(page);
    setTimeout(()=>setLoading(e=>!e),1000);
  };
  return (
    <>
      {
        loading?<CardSkeleton/>:
        <div className='p-4 my-4 grid grid-cols-4 gap-2 md:gap-12 sm:gap-4 items-center'>
      {
        filteredCards.map((pro)=>{
          return(
            <div key={pro} className='cursor-pointer bg-white px-10 py-10 sm:px-14 sm:py-14 flex flex-col gap-10 items-center justify-center border-t-8 border-red-500 rounded-sm'
            onClick={()=>{Result(pro);ScrollResult()}}
            >
              <Image
                src={'/gym.png'}
                width={50}
                height={50}
                alt='Card Image'
              />
              <p className={`${lustina.className} antialiased text-lg font-semibold`}>{pro}</p>
            </div>
          )
        })
      }
      </div>
      }
      <CardsPagination current={currentPage} handlePrevious={()=>{
        handleAnimation(currentPage-1);
      }}
        handleNext={()=>{
          handleAnimation(currentPage+1);
        }}
        TotalPages={totalPages}
        Loading={loading}
        ></CardsPagination>
    </>
  )
}

export default Card
