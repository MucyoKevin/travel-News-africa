

import { useRouter } from "next/navigation";


const LoginButton = ()=>{

    const router = useRouter();
    return(
        <button 
        type="button"
        onClick={()=> router.push('/Login')}
        className="hidden md:inline bg-slate-600 text-white px-4 lg;px-8 py-2 lg;py-4 rounded-full dark:bg-slate-500">
            Login in 
        </button>
    )
}

export default LoginButton;