import React from 'react';
import Card from './Card';
 const Search = ({inputSearch,getResult,handleSearch,ScrollResult}:{inputSearch:string,getResult:(value:string)=>void,handleSearch:(value:string)=>void,ScrollResult:()=>void}) => {
  return (
    <>
      <div className='lg:w-3/4 mx-auto w-full py-10'>
        <label htmlFor="search"></label>
        <input type="text" name='search' placeholder='search Exercises' className='sm:w-3/4 w-3/5  py-5 px-4 border-2 border-slate-200 rounded-md focus:rounded-md focus:border-red-500 outline-none ring-0 placeholder:text-base'
        onChange={(e)=>handleSearch(e.target.value)}
        value={inputSearch}/>
        <button type='button' className='bg-red-500 sm:w-1/5 w-1/3 px-12 py-5 rounded-md ring-none outline-none font-semibold text-white hover:border-2 hover:text-black hover:border-red-500 hover:bg-transparent'
        onClick={()=>{getResult(inputSearch);handleSearch('');ScrollResult()}}>Search</button>
      </div>
      <div>
        <Card Result={getResult} ScrollResult={ScrollResult}></Card>
      </div>
      
    </>
  )
}

export default Search
