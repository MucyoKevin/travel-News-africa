const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchAPI(query, {variables} = {}, options){
    const headers = {"content-Type" : "application/json"};

    const res = await fetch(API_URL , {
        method : "POST" ,
        headers,
        body : JSON.stringify({
            query,
            variables,
        }),
    });
    
    const json = await res.json();
    if(json.errors){
        console.error(json.errors);
        throw new Error("failed to fetch API");
    }
    
    return json.data;
}

