'use client'

import {useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = ( ) => {

    const [ Open , setOpen] = useState(false);
    const HandleEvent = ()=>{
        setOpen(!Open);
    }    

    return(
        <div className='position-fixed p-0 flex flex-row '>
            <MagnifyingGlassIcon 
             className=' h-6 w-6 cursor-pointer'
             onClick={HandleEvent} 
             /><input 
            type="text"
            placeholder='Search...'
            className={Open ? "bg-white text-black w-72 h-full p-2 border-none outline-none transition-all ease-in-out delay-50": 'hidden'}
            />
            
        </div>
    )
}

export default SearchBar;

