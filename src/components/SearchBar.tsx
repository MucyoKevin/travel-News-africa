'use client'

import {useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = ( ) => {

    const [ Open , setOpen] = useState(false);
    const HandleEvent = ()=>{
        setOpen(!Open);
    }    

    return(
        <div className='position-relative  flex flex-row  will-change:transform'>
            <MagnifyingGlassIcon 
             className=' h-8 w-8 cursor-pointer'
             onClick={HandleEvent} 
             /><input 
            type="text"
            placeholder='Search...'
            className={Open ? "bg-white text-black w-64 h-full p-3 border-none outline-none transition-all ease-in-out delay-50": 'hidden'}
            />
            
        </div>
    )
}

export default SearchBar;

