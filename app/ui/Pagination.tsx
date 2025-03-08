'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { generatePagination } from '../lib/definition';
import Link from 'next/link';
import clsx from 'clsx';
function PaginationArrow({
    href,
    direction,
    isDisabled,
  }: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
  }) {
    const className = clsx(
      'flex h-10 w-10 items-center justify-center rounded-md border',
      {
        'pointer-events-none text-gray-300': isDisabled,
        'hover:bg-gray-100': !isDisabled,
        'mr-2 md:mr-4': direction === 'left',
        'ml-2 md:ml-4': direction === 'right',
      },
    );
  
    const icon =
      direction === 'left' ? (
        <div className="w-4">&lt;</div>
      ) : (
        <div className="w-4">&gt;</div>
      );
  
    return isDisabled ? (
      <div className={className}>{icon}</div>
    ) : (
      <Link className={className} href={href}>
        {icon}
      </Link>
    );
  }
  function PaginationNumber({
    page,
    href,
    isActive,
    position,
  }: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
  }) {
    const className = clsx(
      'flex h-10 w-10 items-center justify-center text-sm border',
      {
        'rounded-l-md': position === 'first' || position === 'single',
        'rounded-r-md': position === 'last' || position === 'single',
        'z-10 bg-red-600 border-red-600 text-white': isActive,
        'hover:bg-gray-100': !isActive && position !== 'middle',
        'text-gray-300': position === 'middle',
      },
    );
  
    return isActive || position === 'middle' ? (
      <div className={className}>{page}</div>
    ) : (
      <Link href={href} className={className}>
        {page}
      </Link>
    );
  }
const Pagination = ({total}:{total:number}) => {
  const pathname=usePathname();
  const params=useSearchParams();
  const currentPage=Number(params.get('page'))||1;
  //console.log(currentPage);
    const allPages=generatePagination(currentPage,total);

    const createURL=(pageNumber:number | string)=>{
        const pro=new URLSearchParams(params);
        pro.set('page',pageNumber.toString());
        return `${pathname}?${pro.toString()}`;
    }

    return (
    <div className='flex justify-center mb-6'>
      <PaginationArrow
        href={createURL(currentPage-1)}
        direction={'left'}
        isDisabled={currentPage<=1}
      />
     <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={page}
                href={createURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>
    <PaginationArrow
        href={createURL(currentPage+1)}
        direction={'right'}
        isDisabled={currentPage>=total}
      />
    </div>
  )
}

export default Pagination
