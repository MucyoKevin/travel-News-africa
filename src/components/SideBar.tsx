import Link from "next/link";
import { useState } from "react";
import { Bars3Icon} from "@heroicons/react/24/solid";


const SideBar = () =>{
    const [ShouldMenuOpen , setShouldMenuOpen] = useState(false);
    const ShowMenu = () =>{
        setShouldMenuOpen(!ShouldMenuOpen);
    }
    return(
    <div>
        <Bars3Icon className="h-8 w-8 cursor-pointer"
                onClick={ShowMenu} />

        <div className={ShouldMenuOpen ? "bg-primary-color list-none top-0 left-0 h-full w-32 text-black p-3 space-y-3" : "hidden"}>
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