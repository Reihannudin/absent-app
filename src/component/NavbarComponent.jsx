import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import http from "../config/http";


export const NavbarComponent = () => {

    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const auth_token = urlParams.get("auth_token");
    const isLogin = urlParams.get("isLogin");

    const [isMenuHidden , setIsMenuHidden] = useState(true);
    const [isDropdownHidden  , setIsDropdownHidden] = useState(true);
    const toggleMenu = () => {
        setIsMenuHidden((prevHidden) => !prevHidden);
    };

    const toggleDropdown = () => {
        setIsDropdownHidden((prevHidden) => ! prevHidden);
    }

    const logged = JSON.parse(localStorage.getItem('isLogin'));
    const user = JSON.parse(localStorage.getItem('whoLogin'));


    useEffect(() => {
        if (auth_token) {
            http
                .get(`/logout/${user.id}`, {
                    method: 'POST',
                    headers: {
                        Authorization: "Bearer " + auth_token,
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    },
                })
                .then((res) => {
                    if (res) {
                        localStorage.setItem('isLogin' , true)
                        localStorage.setItem("token", auth_token);
                        localStorage.setItem("whoLogin", user);
                        navigate("/");
                    } else {
                        alert("Something wrong!");
                    }
                });
        }
    }, []);

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
                                                    { user === null ? (
                                                        <li className="pe-6 text-gray-400 hover:text-purple-500" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link to="http://localhost:3000/login">
                                                                <p>Activities</p>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        <li className="pe-6 text-gray-400 hover:text-purple-500" style={{ borderRight:"1px solid #ebebeb"}}>
                                                            <Link to="http://localhost:3000/activities">
                                                                <p>Activities</p>
                                                            </Link>
                                                        </li>
                                                    )}
                                                    {user === null ? (
                                                        <li className="pe-6 text-gray-400 hover:text-purple-500">
                                                            <Link to="http://localhost:3000/login">
                                                                <p>Class</p>
                                                            </Link>
                                                        </li>
                                                    ) : (
                                                        <li className="pe-6 text-gray-400 hover:text-purple-500">
                                                            <Link to="http://localhost:3000/class">
                                                                <p>Class</p>
                                                            </Link>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {logged ? (
                                        <div className="my-auto flex gap-3">
                                            <li className="ps-3 relative list-none" style={{ borderLeft:"1px solid #ebebeb"}}>
                                                <button  onClick={toggleDropdown} style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_profile"
                                                        className=" cursor-pointer gap-2 flex ">
                                                    <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">{user.name}</span>
                                                    <div className="my-auto" style={{ height:"14px" , width:"14px"}}>
                                                        <img  className="w-full h-full" src="/assets/expand-icon.svg"/>
                                                    </div>
                                                </button>
                                                    <div id="dropdown_profile"
                                                         className={`z-10 ${isDropdownHidden ? 'hidden' : ''} absolute left-0 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                                        <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                                                            aria-labelledby="dropdownLargeButton">
                                                            <li>
                                                                <a href={`http://127.0.0.1:8000/logout`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log Out</a>
                                                            </li>
                                                        </ul>
                                                </div>
                                            </li>
                                        </div>
                                    ):(
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
                                    )}
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
             pb-4
             w-full
             lg:justify-between
             lg:pt-0"
                        >
                            <li className="py-3">
                                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Beranda</a
                                >
                            </li>
                            <li className="py-3">
                                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Activities</a
                                >
                            </li>
                            <li className="py-3">
                                <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                                >Class</a
                                >
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
