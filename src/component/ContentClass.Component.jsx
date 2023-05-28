import React, {useEffect, useState} from "react";
import {CardActivityComponent} from "./card/CardActivity.Component";
import {CardClassComponent} from "./card/CardClass.Component";
import {CardClassDetailComponent} from "./card/CardClassDetail.Component";
import {CardPeopleComponent} from "./card/CardPeople.Component";
import {useNavigate} from "react-router-dom";

export const ContentClassComponent = () => {

    const navigate = useNavigate();

    const handleTabCLick = (e , tabName) => {
        e.preventDefault();
        navigate(`/class#${tabName}`)
    }

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

                    e.target.parentElement.classList.add("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" , )
                }
            });
        });
        return () => {
            tabTogglers.forEach(function(toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, [])

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [classAll, setClassAll] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/${user.id}/class`)
            .then((response) => response.json())
            .then((classAll) => setClassAll(classAll));
    }, []); // Add an empty dependency array


    const [myClass , setMyClass] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/class/${user.id}`)
            .then((response) => response.json())
            .then((myClass  => setMyClass(myClass)))
    } , [])

    return(
        <>
            <div  className=" md:pt-14 pt-24 ">
                <div  className=" pb-10 gap-6 ">
                    <div className="bg-white">
                        <div className="mx-auto">
                            <ul id="tabs" className="inline-flex mt-1 w-4/12 mx-auto justify-between  pt-2 px-1 pb-1 text-purple-500">
                                <li className=" px-4 border-b text-gray-800  font-normal  py-2 -mb-px">
                                    <a id="default-tab" href="#class" onClick={(e) => handleTabCLick(e , 'class')}>Classes</a>
                                </li>
                                <li className="px-4 text-gray-800 font-normal py-2 ">
                                    <a href="#myclass" onClick={(e) => handleTabCLick(e , 'myclass')}>My Class</a>
                                </li>
                                <li className="px-4 text-gray-800 hidden font-semibold py-2 ">
                                    <a href="#fourth">Tab 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Tab Contents */}
                    <div id="tab-contents" className=" w-10/12 mx-auto">
                        <div id="class" className="p-4">
                            {user === null ? (
                                <div className="gap-4 text-center mx-6" style={{ overflowX: "auto" }}>
                                    <div className="mx-auto my-14">
                                        <h2 style={{  fontSize:"18px", color:"#716f6f"}}>Kamu tidak memiliki kelas yang kamu ikuti</h2>
                                        <p style={{  fontSize:"14px", color:"#716f6f"}}>Bergabunglah kedalam kelas menggunakan code class</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full py-5">
                                    <div>
                                        {classAll.length === 0 ?(
                                                <div className="py-8">
                                                    <div className="my-8">
                                                        <div>
                                                            <p className="text-gray-600">Tidak ada Absent yang pernah kamu buat</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        ) : (
                                                <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                                    {classAll.map((itemClass) => {
                                                        return(
                                                            <>
                                                                <div key={itemClass.id}>
                                                                    <CardClassComponent title={itemClass.name} teacher={itemClass.teacher} />
                                                                </div>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div id="myclass" className="hidden p-4">
                            <div className="w-full py-5">
                                <div>
                                    {myClass.length === 0 ? (
                                        <div className="py-8">
                                            <div className="my-8">
                                                <div>
                                                    <p className="text-gray-600">Kamu belum pernah membuat class</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                            {myClass.map((itemMyClass) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <CardClassComponent length={myClass.length} title={itemMyClass.name} teacher={itemMyClass.teacher} />
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div id="fourth" className="hidden p-4">
                            Fourth tab
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
