import {CardClassDetailComponent} from "../component/card/CardClassDetail.Component";
import {CardPeopleComponent} from "../component/card/CardPeople.Component";
import React, {useEffect, useState} from "react";
import {CardMyClassDetailComponent} from "../component/card/CardMyClassDetail.Component";
import {CardPeopleAbsentComponent} from "../component/card/CardPeopleAbsent.Component";
import {useNavigate, useParams} from "react-router-dom";
import {CardPeopleClassComponent} from "../component/card/CardPeopleClass.Component";

function DetailMyClass (){

    const { id }= useParams()
    const user = JSON.parse(localStorage.getItem('whoLogin'));


    const [myClass , setMyClass] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/class/${user.id}/${id}`)
            .then((response) => response.json())
            .then((myClass => setMyClass(myClass)))
    } , [])

    const navigate = useNavigate();

    const handleTabClick = (e, tabName) => {
        e.preventDefault();
        navigate(`/my/class/detail/${id}#${tabName}`);
    };

    useEffect(() => {
        const tabsContainer = document.querySelector("#tabs");
        const tabTogglers = tabsContainer.querySelectorAll("#tabs a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click" , function (e){
                e.preventDefault();

                let tabName = this.getAttribute("href");

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++){
                    tabTogglers[i].parentElement.classList.remove("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" );
                    tabContents.children[i].classList.remove("hidden");

                    if("#" + tabContents.children[i].id === tabName){
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");

                    e.target.parentElement.classList.add("border-b"  , "py-1" , "-mb-px", "text-purple-500" , )
                }
            });
        });

        return () => {
            tabTogglers.forEach(function(toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, [])


    return(
        <>
            <nav className="border-b">
                <header className="w-10/12  mx-auto">
                    <div className="flex py-1 justify-between gap-4">
                        <div className="flex gap-4">
                            <button>
                                <div style={{ height:"24px"}}>
                                    <img className="h-full" src="/assets/arrow-back.svg"/>
                                </div>
                            </button>
                            <div className="my-2 text-left" >
                                <h4 style={{ fontSize:"16px"}}>Class Name</h4>
                                <p style={{ fontSize:"14px"}}>Teacher Name</p>
                            </div>
                        </div>
                        <div className="">
                            <ul id="tabs" className="inline-flex mt-1 w-full mx-auto  pt-2 px-1 pb-1 text-purple-500">
                                <li className=" px-4 text-gray-800 font-normal py-2 -mb-px">
                                    <a id="default-tab" href="#all" onClick={(e) => handleTabClick(e , 'all')}>All</a>
                                </li>
                                <li className="px-4 text-gray-800 font-normal py-2 ">
                                    <a href="#people" onClick={(e) => handleTabClick(e , 'people')}>People</a>
                                </li>
                                <li className="px-4 text-gray-800 hidden font-normal py-2 ">
                                    <a href="#fourth">Tab 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </nav>
            <div style={{ background:"#ffffff"}}>
                {/* Tab Contents */}
                <div id="tab-contents" className=" w-10/12 mx-auto">
                    <div id="all" className="p-4">
                        <div className="w-full py-5">
                            <div>
                                {myClass.map((itemClass) => {
                                    return(
                                        <>
                                            <div>
                                                {itemClass.absents.length === 0 ? (
                                                    <div>
                                                        <div className="my-24">
                                                            <h2>Tidak ada data</h2>
                                                        </div>
                                                    </div>
                                                ):(
                                                    <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">

                                                        {itemClass.absents.map((itemClassAbsent) => {
                                                            return(
                                                                <>
                                                                    {itemClassAbsent.status === "ongoing" ? (
                                                                        <div >
                                                                            <CardMyClassDetailComponent id={itemClassAbsent.id} title={itemClassAbsent.title} status={itemClassAbsent.status} deadline={itemClassAbsent.endtime} date={itemClassAbsent.date}  />
                                                                        </div>
                                                                    ) : (
                                                                        <div >

                                                                        </div>
                                                                    )}

                                                                </>
                                                            )
                                                        })}
                                                    </ul>
                                                )
                                                }
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div id="people" className="hidden p-4">
                        <div className="w-10/12 mx-auto py-5">
                            {myClass.map((itemClassOne) => {
                                return(
                                    <>
                                        <div className="lg:flex gap-4 lg:justify-between grid  md:grid-cols-1 w-full">
                                            <div className="lg:w-4/12 w-full">
                                                <div className="shadow w-full pb-6 border-radius-8">
                                                    <div className="mx-4 text-left pt-5 pb-3 ">
                                                        <h2 style={{ fontSize:"18px"  ,color:"#646464"}}>Your link class</h2>
                                                        <p style={{ color:"#646464"}}>Use this code to invite your friends</p>
                                                    </div>
                                                    <div className="mx-4">
                                                        <button className="w-full py-2 disabled bg-gray-100 weverse-color text-white border-radius-4" >
                                                            {itemClassOne.code}
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="lg:w-8/12 w-full">
                                                {itemClassOne.students.length === 0 ? (
                                                    <div>
                                                        <div className="my-24">
                                                            <h2>Tidak ada data</h2>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <ul className=" w-full block">
                                                        {itemClassOne.students.map((itemClassStudent) => {
                                                            return(
                                                                <>
                                                                    <div>
                                                                        <CardPeopleClassComponent  name={itemClassStudent.name} email={itemClassStudent.email} />
                                                                    </div>
                                                                </>
                                                            )
                                                        })}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div id="fourth" className="hidden p-4">
                        Fourth tab
                    </div>
                </div>
            </div>
        </>

        // <>
        //     <nav className="border-b">
        //         <header className="w-10/12  mx-auto">
        //             <div className="flex py-1 justify-between gap-4">
        //                 <div className="flex gap-4">
        //                     <button>
        //                         <div style={{ height:"24px"}}>
        //                             <img className="h-full" src="/assets/arrow-back.svg"/>
        //                         </div>
        //                     </button>
        //                     <div className="my-2 text-left" >
        //                         <h4 style={{ fontSize:"16px"}}>Class Name</h4>
        //                         <p style={{ fontSize:"14px"}}>Teacher Name</p>
        //                     </div>
        //                 </div>
        //                 <div className="">
        //                     <ul id="tabs" className="inline-flex mt-1 w-full mx-auto  pt-2 px-1 pb-1 text-purple-500">
        //                         <li className=" px-4 text-gray-800 font-normal py-2 -mb-px">
        //                             <a id="default-tab" href="#all" onClick={(e) => handleTabClick(e , 'all')}>All</a>
        //                         </li>
        //                         <li className="px-4 text-gray-800 font-normal py-2 ">
        //                             <a href="#people" onClick={(e) => handleTabClick(e , 'people')}>People</a>
        //                         </li>
        //                         <li className="px-4 text-gray-800 hidden font-normal py-2 ">
        //                             <a href="#fourth">Tab 4</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </header>
        //     </nav>
        //     <div style={{ background:"#ffffff"}}>
        //         {/* Tab Contents */}
        //         <div id="tab-contents" className=" w-10/12 mx-auto">
        //             <div id="all" className="hidden p-4">
        //                 <div className="w-full py-5">
        //                     <div>
        //                         {myClass.map((itemClass) => {
        //                             return(
        //                                 <>
        //                                     <div>
        //                                         {itemClass.absents.length === 0 ? (
        //                                             <div>
        //                                                 <div className="my-24">
        //                                                     <h2>Tidak ada data</h2>
        //                                                 </div>
        //                                             </div>
        //                                         ):(
        //                                             <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        //                                                 {itemClass.absents.map((itemClassAbsent) => {
        //                                                     return(
        //                                                         <>
        //                                                             {itemClassAbsent.status === "ongoing" ? (
        //                                                                 <div >
        //                                                                     <CardMyClassDetailComponent title={itemClassAbsent.title} status={itemClassAbsent.status} deadline={itemClassAbsent.endtime} date={itemClassAbsent.date} />
        //                                                                 </div>
        //                                                             ) : (
        //                                                                 <div >
        //
        //                                                                 </div>
        //                                                             )}
        //
        //                                                         </>
        //                                                     )
        //                                                 })}
        //                                             </ul>
        //                                         )
        //                                         }
        //                                     </div>
        //                                 </>
        //                             )
        //                         })}
        //                     </div>
        //                 </div>
        //             </div>
        //             <div id="people" className="hidden p-4">
        //                 <div className="sm:w-10/12 w-11/12 mx-auto py-5">
        //                     {myClass.map((itemClassOne) => {
        //                         return(
        //                             <>
        //                                 <div className="lg:flex gap-4 lg:justify-between grid  md:grid-cols-1 w-full">
        //                                     <div className="lg:w-4/12 w-full">
        //                                         <div className="shadow w-full pb-6 border-radius-8">
        //                                             <div className="mx-4 text-left pt-5 pb-3 ">
        //                                                 <h2 style={{ fontSize:"18px"  ,color:"#646464"}}>Your link class</h2>
        //                                                 <p style={{ color:"#646464"}}>Use this code to invite your friends</p>
        //                                             </div>
        //                                             <div className="mx-4">
        //                                                 <button className="w-full py-2 disabled bg-gray-100 weverse-color text-white border-radius-4" >
        //                                                     {itemClassOne.code}
        //                                                 </button>
        //                                             </div>
        //
        //                                         </div>
        //                                     </div>
        //                                     <div className="lg:w-8/12 w-full">
        //                                         {itemClassOne.students.length === 0 ? (
        //                                             <div>
        //                                                 <div className="my-24">
        //                                                     <h2>Tidak ada Student</h2>
        //                                                 </div>
        //                                             </div>
        //                                         ) : (
        //                                             <ul className=" w-full block">
        //                                                 {itemClassOne.students.map((itemClassStudent) => {
        //                                                     return(
        //                                                         <>
        //                                                             <div>
        //                                                                 <CardPeopleClassComponent  name={itemClassStudent.name} email={itemClassStudent.email} />
        //                                                             </div>
        //                                                         </>
        //                                                     )
        //                                                 })}
        //                                             </ul>
        //                                         )}
        //                                     </div>
        //                                 </div>
        //                             </>
        //                         )
        //                     })}
        //                 </div>
        //             </div>
        //             <div id="fourth" className="hidden p-4">
        //                 Fourth tab
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default DetailMyClass