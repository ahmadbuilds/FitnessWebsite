'use client';
import Image from "next/image";
import Link from "next/link";
import Navbar from './ui/NavBar';
import Search from "./ui/Search";
import { useRef, useState } from "react";
import Result from "./ui/Result";
import Ending from "./ui/Ending";
//import { Suspense } from "react";
export default function Dashboard() {
  const [search,setSearch]=useState('');
  const [result,setResult]=useState('All');
  const reference=useRef<HTMLDivElement>(null);
  
  function ScrollToResult()
  {
    if(reference.current)
    {
      reference.current.scrollIntoView({
        behavior:'smooth',
        block:'nearest',
        inline:'nearest'
      });
    }
  }
  return (
    <>
    <div className="lg:mx-8 mx-4 flex h-screen ">
      <div className="flex flex-col gap-52 h-screen w-full lg:w-1/2 z-10">
        <Navbar></Navbar> 
        <div className=" w-full lg:px-16 px-8 space-y-5  lg:text-left text-center">
            <p className='text-red-500 text-lg font-semibold'>Fitness Club</p>
            <h1 className="text-4xl font-bold">Sweet, Smile</h1>
            <h1 className="text-4xl font-bold">And Repeat</h1>
            <p className="text-base">Check out the most effective exercises personalized to you.</p>
            <Link href={'/Exercise'} className="bg-red-500 hover:bg-white hover:ring-1 hover:ring-red-500 hover:rounded-sm hover:text-black inline-block text-white px-4 py-2 rounded-sm border-none outline-none">Explore Exercises</Link>
            <p className="hidden lg:block mx-5 mt-0 items-center text-[220px] font-semibold text-red-100">Exercise</p>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 z-50">
        <Image
            src={'/male.jpeg'}
            alt="Fitness coach"
            width={760}
            height={600}
            className="h-screen w-full object-cover xl:w-11/12 rounded-bl-[70px]"
            />
      </div>
    </div>
    <div className="lg:w-5/6 w-full h-screen mx-auto lg:mt-48">
      <div className="text-center font-semibold text-6xl leading-[90px] w-full">
        <h1 className="pt-9">Awesome Exercises You</h1>
        <h1>Should know</h1>
      </div>
      <Search inputSearch={search} getResult={(value)=>setResult(value)} handleSearch={(value)=>{
        setSearch(value);
      }}
      ScrollResult={ScrollToResult}
      ></Search>
    </div>
    <div ref={reference}>
      <Result query={result}></Result>
    </div>
    <div>
      <Ending/>
    </div>
    </>
  );
}
