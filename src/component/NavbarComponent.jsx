import React, { useState } from 'react';
import {Link} from "react-router-dom";


export const NavbarComponent = () => {

    const [isMenuHidden , setIsMenuHidden] = useState(true);

    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    };

    return(
        <>
            <div className="w-full fixed  bg-white" style={{  zIndex:"44" , minWidth:"530px"}}>
                <div className="mx-auto my-1  pb-2  lg:pb-2 pt-1 flex  w-full" style={{ borderBottom:"1px solid #E5E3E9"}}>
                    <header className="w-full">
                        <nav
                            className="
                        lg:w-11/12
                        w-11/12
                        xl:w-10/12
          flex
          justify-between
          py-4
          mx-auto
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
                        >
                            <div className="w-full justify-between flex">
                                <div className="flex">
                                    <a href="#">
                                        <div className="my-2" >
                                            <img className="w-full my-auto h-full" src="/assets/Wetrix.svg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="flex justify-between ">
                                    <button id="menu-button" onClick={toggleMenu}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="menu-button"
                                            className="h-6 w-6 me-2 me-2 cursor-pointer lg:hidden block"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                    <div className="hidden  mx-16 w-full lg:flex  lg:items-center lg:w-auto" id="menu">
                                        <div className="flex gap-4">
                                            <div  style={{ fontSize:"16px"}} className="font-medium my-auto ">
                                                <ul className="list-none gap-6  flex my-auto">
                                                    <li className="pe-6 text-gray-400 hover:text-purple-500" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link to="http://localhost:3000/">
                                                            <p>Beranda</p>
                                                        </Link>
                                                    </li>
                                                    <li className="pe-6 text-gray-400 hover:text-purple-500" style={{ borderRight:"1px solid #ebebeb"}}>
                                                        <Link to="http://localhost:3000/activities">
                                                            <p>Activities</p>
                                                        </Link>
                                                    </li>
                                                    <li className="pe-6 text-gray-400 hover:text-purple-500">
                                                        <Link to="http://localhost:3000/class">
                                                            <p>Class</p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-auto flex gap-2 md:gap-1">
                                        <button className="btn lg:block weverse-background-btn border-radius-20 px-4 sm:px-5 lg:px-5 xl:px-6 py-1">
                                            <Link to="/login">
                                                <p className="font-medium  text-white" style={{ fontSize:"14px"}}>Log in</p>
                                            </Link>
                                        </button>
                                        <button className="btn  lg:block border-radius-20 sm:px-5 px-4 lg:px-5 xl:px-6 py-1" style={{ border:"1px solid #AC7EEE"}}>
                                            <Link to="/signup">
                                                <p className="font-medium weverse-color" style={{ fontSize:"14px"}}>Sign Up</p>
                                            </Link>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </header>
                </div>
                <div  id="menu" className={`menu ${isMenuHidden ? 'hidden' : ''}`} >
                    <div className="lg:hidden lg:w-full bg-white relative flex items-center w-auto sm:flex sm:items-center sm:w-auto md:flex md:items-center md:w-auto">
                        <ul
                            className="
              pt-4
              text-base text-gray-700
             lg:flex
             w-full
             lg:justify-between
             lg:pt-0"
                        >
                            <li>
                                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Cart</a
                                >
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Order Shipping</a
                                >
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Announcement</a
                                >
                            </li>
                            <li>
                                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Events</a
                                >
                            </li>
                            <li>
                                <a
                                    className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                                    href="#"
                                >Support</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
