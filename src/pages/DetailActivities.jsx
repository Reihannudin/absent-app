
import {NavbarComponent} from "../component/NavbarComponent";
import {ContentActivitiesComponent} from "../component/ContentActivities.Component";
import React, {useEffect, useState} from "react";
import {ContentDetailActivitiesComponent} from "../component/ContentDetailActivities.Component";
import {CardClassDetailComponent} from "../component/card/CardClassDetail.Component";
import {CardPeopleComponent} from "../component/card/CardPeople.Component";
import {CardPeopleAbsentComponent} from "../component/card/CardPeopleAbsent.Component";
import {CardMyClassDetailComponent} from "../component/card/CardMyClassDetail.Component";
import {useNavigate, useParams} from "react-router-dom";
import api from "../config/api";


function DetailActivities(){

    const navigate = useNavigate();
    const handleTabClick = (e, tabName) => {
        e.preventDefault();
        navigate(`/activities#${tabName}`);
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

    const { id   } = useParams();

    const [absent , setAbsent] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/absent/${id}`)
            .then((response) => response.json())
            .then((absent => setAbsent(absent)))
    } , [])


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
                                {absent.map((itemAbsent) => {
                                    return(
                                        <>
                                            <div>
                                                <h4 style={{ fontSize:"16px"}}>{itemAbsent.class}</h4>
                                                <p style={{ fontSize:"14px"}}>{itemAbsent.vocation}</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="">
                                            <ul id="tabs" className="inline-flex mt-1 w-full mx-auto  pt-2 px-1 pb-1 text-purple-500">
                                                <li className=" px-4 text-gray-800 font-normal py-2 -mb-px">
                                                    <a id="default-tab" href="#first">Absent</a>
                                                </li>
                                                <li className="px-4 text-gray-800 font-normal py-2 ">
                                                    <a href="#third">People</a>
                                                </li>
                                                <li className="px-4 text-gray-800 hidden font-semibold py-2 ">
                                                    <a href="#fourth">Tab 4</a>
                                                </li>
                                            </ul>

                        </div>
                    </div>
                </header>
            </nav>
            <div style={{ background:"#ffffff"}}>
                {/* Tab Contents */}
                <div id="tab-contents" className=" w-full mx-auto">
                    <div id="first" className="p-4">
                        {absent.map((itemAbsent) => {
                            return(
                                <>
                                    <div className="w-full pb-5 pt-2">
                                        <div style={{ background:"#ffffff"}}>
                                            <ContentDetailActivitiesComponent title={itemAbsent.title} date={itemAbsent.date} teacher={itemAbsent.teacher} starttime={itemAbsent.start_time} duedate={itemAbsent.due_date} endtime={itemAbsent.end_time}  />
                                            {/*<ContentDetailActivitiesComponent />*/}
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div id="third" className="hidden p-4">
                        <div className="w-10/12 mx-auto py-5">
                            <div className="lg:flex gap-4 lg:justify-between grid  md:grid-cols-1 w-full">
                                {absent.map((itemClass) => {
                                    return(
                                        <>
                                                <div className="lg:w-4/12 w-full">
                                                    <div className="shadow w-full pb-6 border-radius-8">
                                                        <div className="mx-4 text-left pt-5 pb-3 ">
                                                            <h2 style={{ fontSize:"18px"  ,color:"#646464"}}>List Student </h2>
                                                            <p style={{ color:"#646464"}}>List untuk mengetahui siapa saja yang sudah absent</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg:w-10/12 w-full">
                                                    <div className=" my-4 w-full text-left">
                                                        <h2 style={{ fontSize:"20px"}}>Student List</h2>
                                                    </div>
                                                    <ul className="grid md:grid-cols-2 grid-cols-1 gap-5 text-left">
                                                        {itemClass.students.map((itemClassStudent) => {
                                                            return(
                                                                <>
                                                                    <div >
                                                                        <CardPeopleComponent absent_id={itemClass.absent_id} id={itemClass.id}  user_id={itemClassStudent.id} class_id={itemClass.id} name={itemClassStudent.name} />
                                                                    </div>
                                                                </>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div id="fourth" className="hidden p-4">
                        Fourth tab
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailActivities
