import {Link, useNavigate, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {use} from "bcrypt/promises";


export const CardMyClassDetailComponent = (props) => {

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [isDropdownHidden  , setIsDropdownHidden] = useState(true);
    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => ! prevHidden);
    }

    return(
        <>
            <div className="bg-white shadow border-radius-8" style={{ maxWidth:"270px"}}>
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                    </div>
                    <div className="block text-left mx-4 py-1 gap-4">
                        <div className="relative">
                            <div className="flex justify-between">
                                <h2 className="font-normal my-1 py-0" style={{ fontSize:"18px"}}>{props.title}</h2>
                                <div className="mt-2" style={{ height:"20px"}}>

                                    <div className="my-auto flex gap-3">
                                        <li className="ps-3 relative list-none" >
                                            <button  onClick={toggleDropdown} style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_profile"
                                                     className=" cursor-pointer gap-2 flex ">
                                                    <div style={{ height:"20px"}}>
                                                        <img className="w-full h-full" src="/assets/menu-icon.svg"/>
                                                    </div>
                                            </button>
                                            <div id="dropdown_profile"
                                                 className={`z-10 ${isDropdownHidden ? 'hidden' : ''} absolute right-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                                <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                                                    aria-labelledby="dropdownLargeButton">
                                                    <li>
                                                        <a href={`/my/class/update/absent/${props.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update</a>
                                                    </li>
                                                    <li>
                                                        <a href={`http://127.0.0.1:8000/api/teacher/${user.id}/delete/absent/${props.id}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>

                        </div>
                         <div className="my-1 pb-2">
                            <p className="my-auto py-0" style={{ fontSize:"12px"}}>{props.deadline} : {props.date}</p>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                            <div className="my-1">
                                <h3 className="my-auto py-0" style={{ fontSize:"14px"}}>{props.status}</h3>
                            </div>
                            <button className="mt-1 py-0.5 mb-1 text-black border-radius-8">
                                <Link to={`/my/absent/detail/${props.id}`}>
                                    <div style={{ height:"18px"}}>
                                        <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}