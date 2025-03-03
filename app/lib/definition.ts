//getting all the body parts from the API
const options = {
	method: 'GET',
    headers:{
        'x-rapidapi-key':process.env.NEXT_PUBLIC_RAPIDAPI_KEY?process.env.NEXT_PUBLIC_RAPIDAPI_KEY:'',
        'x-rapidapi-host':process.env.NEXT_PUBLIC_RAPIDAPI_HOST?process.env.NEXT_PUBLIC_RAPIDAPI_HOST:''
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
export const fetchBodyPartList=async ()=>{
    const body_parts=process.env.NEXT_PUBLIC_BodyPartUrl;
    if(!body_parts) {throw new Error("The URL IS NOT DEFINED")};
    const body=await getResponse(body_parts);
    return body;
};
export const fetchTopThreeExercises=async (query:string)=>
{
    const AllTopExercises=(query=='All')?process.env.NEXT_PUBLIC_AllTopExercises:`${process.env.NEXT_PUBLIC_DYNAMIC_TOP_EXERCISES}${query}?limit=3&offset=0`;
    if(!AllTopExercises)throw new Error("The URL of Top exercises failed to fetch");
    const Top=await getResponse(AllTopExercises);
    console.log(Top?JSON.parse(Top):"");
    return Top;
}

export type Exercise = {
    id: string;
    gifUrl: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
  };
