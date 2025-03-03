'use client'
import React from 'react'
import { lustina } from "../lib/font";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
export const ExerciseNav = () => {
    const DifferentId={
        home:'/',
        exercise:'/Exercise'
      };
      const pathname=usePathname();
    return (
    <div className=" mt-8 px-8 lg:mt-4 w-full flex items-baseline content-center gap-44" >
          <Image
            src={'/Logo.png'}
            width={55}
            height={55}
            alt="Biceps Image"
          />
          <div className="flex gap-10">
            <Link className={clsx(
              `${lustina.className} text-2xl `,
              {
                'border-b-4 border-red-500':pathname==DifferentId.home
              }
            )} href={'/'}>Home</Link>
            <Link href={'/Exercise'} className={clsx(
              `${lustina.className} text-2xl `,
              {
                'border-b-4 border-red-500':pathname==DifferentId.exercise
              }
            )}>Exercises</Link>
          </div>
        </div>
  )
}

export default ExerciseNav
