import Link from "next/link";
import { useState } from "react";
import { Bars3Icon} from "@heroicons/react/24/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";


const SideBar = () =>{
    const [ShouldMenuOpen , setShouldMenuOpen] = useState(false);
    const ShowMenu = () =>{
        setShouldMenuOpen(!ShouldMenuOpen);
    }
    const closeMenu =() =>{
        setShouldMenuOpen(false);
    }
    return(
    <div>
        <Bars3Icon className="h-6 w-6 cursor-pointer"
                onClick={ShowMenu} />

        <div className={ShouldMenuOpen ? "fixed bg-primary-color list-none top-0 left-0 h-full w-48 text-black p-3 space-y-3" : "hidden"}>
            <ArrowLeftCircleIcon className="h-6 w-6 cursor-pointer absolute top-0 right-0" onClick={closeMenu}/>
                <li>
                    <Link href='/'>
                            Home Page
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                            Tech
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                            politics
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                            Business
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                            Life & style
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                            Health
                    </Link>
                </li>
        </div>
     </div>
    )
}
export default SideBar;