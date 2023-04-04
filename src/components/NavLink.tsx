import Link from "next/link";

type Props ={
    category :string;
    isActive : boolean;
};

const NavLink= ({ category , isActive}:Props ) => {
    return(
       
            <Link href={`/news/${category}`}
            className= {`hover:underline decoration-black-400 text-center decoration-2 active:underline underline-offset-8 rounded-full font:medium p-10 cursor-pointer hover:font-bold capitalize hover:scale-110 transition duration-200 ease-out 
                         ${isActive && "underline decoration-black-400 underline-offset-4 font-bold"}`}
            >
                {category}
            </Link>
           
    )
}

export default NavLink;