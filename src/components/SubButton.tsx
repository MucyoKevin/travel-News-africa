'use client'

import { useRouter } from "next/navigation";

const subButton = () => {
    const router = useRouter();    
    
    return(
        <button 
        type="button"
        className= "hover:bg-slate-900 text-white bg-slate-600 cursor-pointer px-4 lg;px-8 py-2 lg;py-4 rounded-full   "
        onClick={()=> router.push('/Subscription')}
        >
            Subscribe For rwf 200 /week
        </button>
    )
}

export default subButton;
