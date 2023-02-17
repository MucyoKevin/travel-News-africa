

import { useRouter } from "next/navigation";


const LoginButton = ()=>{

    const router = useRouter();
    return(
        <button 
        type="button"
        onClick={()=> router.push('/Login')}
        className="hidden md:inline bg-slate-600 text-white px-2 lg;px-8 py-2 lg;py-4 font-serif text-sm hover:bg-slate-900 dark:bg-slate-500">
            Login in 
        </button>
    )
}

export default LoginButton;