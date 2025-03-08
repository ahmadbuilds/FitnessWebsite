import React from 'react'
import ExerciseSearch from '../ui/ExerciseSearch'
import ExerciseCards from '../ui/ExerciseCards';
import {fetchAllExercises1, fetchAllExercises_Query1 } from '../lib/definition';
import Pagination from '../ui/Pagination';
const page = async(props:{
  searchParams:Promise<{
    page?:number; 
    query?:string;
  }>
}) => {
  const CardsPerPage=4;
  const params=await props.searchParams;
  const query=params?.query ||'';
  const page=params?.page || 1;
  let totalPage=0;
  if (query === '') {
    const response = await fetchAllExercises1();
    const totalPages = response?JSON.parse(response):[];
    totalPage=totalPages.length;
    totalPage=Math.ceil(totalPage/CardsPerPage);
    console.log('Total pages:', totalPage);
  } else {
    const response = await fetchAllExercises_Query1(query);
    const totalPages = response?JSON.parse(response):[];
    totalPage=totalPages.length;
    totalPage=Math.ceil(totalPage/CardsPerPage);
    console.log('Total pages:', totalPage);
  }
  return (
    <div>
      <ExerciseSearch/>
      {(!totalPage)?<p className='text-lg font-semibold text-center'>Result was not found.</p>:<ExerciseCards query={query} start={page} CPP={CardsPerPage}/>}
      {(!totalPage)?<p></p>:<Pagination total={totalPage}/>}
    </div>
  )
}

export default page 
