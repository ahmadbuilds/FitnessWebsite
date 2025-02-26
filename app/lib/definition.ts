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
        console.log(result);
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
export const fetchTopThreeExercises=async ()=>
{
    const AllTopExercises=process.env.NEXT_PUBLIC_AllTopExercises;
    if(!AllTopExercises)throw new Error("The URL of Top exercises failed to fetch");
    const Top=await getResponse(AllTopExercises);
    console.log(Top?JSON.parse(Top):"");
    return Top;
}
