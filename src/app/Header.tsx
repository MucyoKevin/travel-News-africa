'use client'

import 'tailwindcss/tailwind.css';
import Link from "next/link";
import LoginButton from "@/components/LoginButton";
import SubButton from "@/components/SubButton";
import SideBar from '@/components/SideBar';
import SearchBar from '@/components/SearchBar';

const Header = () => {
    return ( 
        <header className=''>
             <div className="grid  justify-around grid-cols-3 gap-8 w-full p-3.5 items-center auto-rows-50px ">
                <div className='flex items-center justify-start position:fixed'>
                    <SideBar />
                    <SearchBar/>
                </div>    
                <div>
                    <Link href='/'>
                        <h1 className="font-serif text-2xl text-center dark:text-white"> Travel Nation 
                            {" "} <span className=" font-extrabold" >Africa</span>
                        </h1>
                    </Link>
                </div>

                <div className="flex flex-nowrap   justify-end space-x-4">
                    {/* sub button */}
                    <SubButton />
                    {/* Login  button  */}
                    <LoginButton />   
                </div>
            </div>

            {/* NavLinks */}
            {/* <NavLinks /> */}
            {/* SearchBox */}
            {/* <SearchBox /> */}
        </header>
     );
}
 
export default Header;


