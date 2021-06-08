
export const parse=(objectToJson:any)=>{
    return JSON.parse(JSON.stringify(objectToJson));
}

export const parseToString = (objectToString:any) =>{
    return JSON.stringify(objectToString);
}