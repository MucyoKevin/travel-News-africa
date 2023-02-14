'use client'

import 'tailwindcss/tailwind.css';
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import LoginButton from "@/components/LoginButton";
import SubButton from "@/components/SubButton";
import SideBar from '@/components/SideBar';
import SearchBar from '@/components/SearchBar';

const Header = () => {
    return ( 
        <header>
             <div className="grid grid-cols-4 gap-4 p-2 items-center">
                <div className='flex items-center justify-start space fixed'>
                    <SideBar />
                </div>
                <div>
                    <SearchBar/>
                </div>
                <div>
                    <Link href='/'>
                        <h1 className="font-serif text-4xl text-center dark:text-white"> Travel Nation 
                            {" "}<span className=" font-extrabold" >Africa</span>
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center justify-end space-x-2">
                    {/* darkmode */}
                    <DarkModeButton />
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


