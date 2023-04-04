'use client'
import { useState , FormEvent  } from "react"; 
import { useRouter } from "next/navigation";

const SearchBox = () =>{
    const [input ,setInput ] = useState('');
    const router = useRouter();

    const handleSearch = ( e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!input) return;
        
        router.push(`/search?term=${input}`);


    }

    return(
            <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex justify-between items-center px-5">
                <input type="text" 
                 placeholder="Search Keywords..."
                 onChange={(e)=>setInput(e.target.value)}
                 className="w-full h-14 rounded-sm placeholder-gray-600 text-gray-500 outline-none flex-1bg-transparent dark:text-black-400" 
                 />
                <div className="">
                 <button 
                 type="submit" 
                 disabled={!input} 
                 className=" text-blue-500 hover:text-white border border-blue-50 hover:bg-sky-200 focus:ring-6 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-5 text-center mr-2 mb-1 dark:border-blue-50 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 disabled:text-gray-400" > Search</button>
                 </div>
            </form>
    )
}

export default SearchBox;