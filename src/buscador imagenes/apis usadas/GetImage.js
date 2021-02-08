const GetImage =async (page,termino) => {
    
    const url=`https://pixabay.com/api/?key=20042004-47574bb548cc61f9c8ee12b3c&q=${termino}&image_type=photo&pretty=true&page=${page}`
    const res=await fetch(url);
    if(!res.ok){
        const {url,status,statusText}=res;
        throw Error(`Error :${status} ${statusText} in fetch ${url}`)
    }
    
    const {hits}= await res.json();
    
    return hits; 
}

export default GetImage;
