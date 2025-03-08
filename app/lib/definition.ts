//getting all the body parts from the API
const options = {
	method: 'GET',
    headers:{
        'x-rapidapi-key':process.env.NEXT_PUBLIC_RAPIDAPI_KEY?process.env.NEXT_PUBLIC_RAPIDAPI_KEY:'',
        'x-rapidapi-host':process.env.NEXT_PUBLIC_RAPIDAPI_HOST?process.env.NEXT_PUBLIC_RAPIDAPI_HOST:''
    }
};
const options1 = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY_VIDEOS?process.env.NEXT_PUBLIC_API_KEY_VIDEOS:'',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};
async function getResponse(url:string){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        //console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}
async function getVideos(url:string)
{
    try {
        const response = await fetch(url, options1);
        const result = await response.text();
        //console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}
export const fetchBodyPartList=async ()=>{
    const body_parts=process.env.NEXT_PUBLIC_BodyPartUrl;
    if(!body_parts) {throw new Error("The URL IS NOT DEFINED")};
    const body=await getResponse(body_parts);
    return body;
};
export const fetchAllExercises=async(start:number)=>{
    const query=`${process.env.NEXT_PUBLIC_ALL_EXERCISES}?limit=4&offset=${start}`;
    if(!query){throw new Error("Failed to fetch hte URL of getting all the Exercises")};
    const All_exercises=await getResponse(query);
    //console.log(All_exercises?JSON.parse(All_exercises):"Failed");
    return All_exercises;
}
export const fetchAllExercises1=async()=>{
    const query=`${process.env.NEXT_PUBLIC_ALL_EXERCISES}?limit=100&offset=${0}`;
    if(!query){throw new Error("Failed to fetch hte URL of getting all the Exercises")};
    const All_exercises=await getResponse(query);
    //console.log(All_exercises?JSON.parse(All_exercises):"Failed");
    return All_exercises;
}
export const fetchAllExercises_Query=async(query1:string,start:number)=>{
    const query=`${process.env.NEXT_PUBLIC_ALL_EXERCISES_QUERY}${query1}?limit=4&offset=${start}`;
    if(!query){throw new Error("Failed to fetch hte URL of getting all the Exercises")};
    console.log(query);
    const All_exercises=await getResponse(query);
    //console.log(All_exercises?JSON.parse(All_exercises):"Failed");
    return All_exercises;
}
export const fetchAllExercises_Query1=async(query1:string)=>{
    const query=`${process.env.NEXT_PUBLIC_ALL_EXERCISES_QUERY}${query1}?limit=100&offset=0`;
    if(!query){throw new Error("Failed to fetch hte URL of getting all the Exercises")};
    const All_exercises=await getResponse(query);
    //console.log(All_exercises?JSON.parse(All_exercises):"Failed");
    return All_exercises;
}
export const fetchTopThreeExercises=async (query:string)=>
{
    const AllTopExercises=(query=='All')?process.env.NEXT_PUBLIC_AllTopExercises:`${process.env.NEXT_PUBLIC_DYNAMIC_TOP_EXERCISES}${query}?limit=3&offset=0`;
    if(!AllTopExercises)throw new Error("The URL of Top exercises failed to fetch");
    const Top=await getResponse(AllTopExercises);
    //console.log(Top?JSON.parse(Top):"");
    return Top;
}

export const fetchExerciseById=async(id:string)=>{
    const query=`${process.env.NEXT_PUBLIC_EXERCISES_ID}${id}`;
    if(!query){throw new Error("Failed to fetch the URL of Exercises ID")};
    const response=await getResponse(query);
    //console.log(response);
    //console.log(response?JSON.parse(response):"");
    return response;

}

export const  fetchVideos=async(query1:string)=>{
    const query=`${process.env.NEXT_PUBLIC_SEARCH_VIDEOS}?query=${query1}&sort=ra&hl=en`;
    if(!query){throw new Error("Failed to fetch the URL of Exercises ID")};
    const response=await getVideos(query);
    //console.log(response?JSON.parse(response):"");
    return response;
}

export type Exercise = {
    id: string;
    gifUrl: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
  };
  export type ExerciseID = {
    gifUrl: string;
    name: string;
    target: string;
    bodyPart:string;
    equipment:string;
    secondaryMuscles: string[];
    instructions:string []
  };
  export type VideoScheme = {
    video: {
      channelName: string;
      thumbnails: { url: string }[];
      title: string;
      videoId: string;
    };
  };
  


export const generatePagination=(currentPage:number,total:number)=>{
    if(total<=7)
    {
        return Array.from({ length: total }, (_, i) => i + 1);
    }
    else if(currentPage<=3)
    {
        return [1,2,3,'...',total-1,total];
    }
    else if(currentPage>=total-2)
    {
        return [1,2,'...',total-2,total-1,total];
    }
    else{
        return[
            1,
            '...',
            currentPage-1,
            currentPage,
            currentPage+1,
            '...',
            total
        ];
    }
}
