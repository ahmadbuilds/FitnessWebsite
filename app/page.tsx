'use client';
import Image from "next/image";
import Link from "next/link";
import Navbar from './ui/NavBar';
export default function Dashboard() {
  return (
    <div className="lg:mx-8 mx-4 flex h-screen">
      <div className="flex flex-col gap-52 h-screen w-full lg:w-1/2 z-10">
        <Navbar></Navbar> 
        <div className=" w-full lg:px-16 px-8 space-y-5  lg:text-left text-center">
            <p className='text-red-500 text-lg font-semibold'>Fitness Club</p>
            <h1 className="text-4xl font-bold">Sweet, Smile</h1>
            <h1 className="text-4xl font-bold">And Repeat</h1>
            <p className="text-base">Check out the most effective exercises personalized to you.</p>
            <Link href={'/Exercises'} className="bg-red-500 hover:bg-white hover:ring-1 hover:ring-red-500 hover:rounded-sm hover:text-black inline-block text-white px-4 py-2 rounded-sm border-none outline-none">Explore Exercises</Link>
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
  );
}
