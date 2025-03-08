'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
const ExerciseSearch = () => {
    const [value,setValue]=useState('');
    const pathname=usePathname();
    const params=useSearchParams();
    const {replace}=useRouter();
    function HandleClick()
    {
        const pro=new URLSearchParams(params);
        if(value)
        {
            pro.set('query',value);
        }
        else{
            pro.delete('query');
        }
        replace(`${pathname}?${pro.toString()}`);
    }
  return (
    <div>
        <div className='lg:w-3/4 mx-auto w-full py-10'>
            <label htmlFor="search"></label>
            <input type="text" name='search' placeholder='Search Target Area..' className='sm:w-3/4 w-3/5  py-5 px-4 border-2 border-slate-200 rounded-md focus:rounded-md focus:border-red-500 outline-none ring-0 placeholder:text-base'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            defaultValue={params.get('query')?.toString()}
            />
            <button type='button' className='bg-red-500 sm:w-1/5 w-1/3 px-12 py-5 rounded-md ring-none outline-none font-semibold text-white hover:border-2 hover:text-black hover:border-red-500 hover:bg-transparent'
            onClick={()=>{HandleClick(); setValue('');}}
            >Search</button>
        </div>
    </div>
  )
}

export default ExerciseSearch
