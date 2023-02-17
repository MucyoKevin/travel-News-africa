import Link from "next/link";

const subButton = () => {
        
    return(
        <Link 
        href="/subscription"
        className= "hover:bg-slate-900 text-white bg-slate-600 cursor-pointer font-serif text-sm px-2 lg;px-8 py-2 lg;py-4  "
         >
        Subscribe for rwf200 /week
        </Link>
        
    )
}

export default subButton;

