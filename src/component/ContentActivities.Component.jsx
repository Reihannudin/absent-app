import {useEffect, useState} from "react";
import {CardAbsentComponent} from "./card/CardAbsent.Component";
import {CardActivityComponent} from "./card/CardActivity.Component";
import {useNavigate} from "react-router-dom";

export const ContentActivitiesComponent = () => {

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

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [absentAll , setAbsentAll] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/absent/${user.id}`)
            .then((response) => response.json())
            .then((absentAll => setAbsentAll(absentAll)))
    } , [])

    const [absentOnGoing , setAbsentOnGoing] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student/absent/${user.id}/status/ongoing`)
            .then((response) => response.json())
            .then((absentOnGoing => setAbsentOnGoing(absentOnGoing)))
    } , [])

    const [absentCreateByUser , setAbsentCreateByUser] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/absent/created/by/student/${user.id}`)
            .then((response) => response.json())
            .then((absentCreateByUser => setAbsentCreateByUser(absentCreateByUser)))
    } , [])

    return(
        <>
            <div  className=" md:pt-14  pt-24 ">
                <div  className=" pb-10 gap-6 ">
                   <div className="bg-white">
                       <ul id="tabs" className="inline-flex mt-3 w-10/12 mx-auto  pt-2 px-1 pb-1 text-purple-500">
                           <li className="px-4 text-gray-800 font-normal py-2 ">
                               <a href="#ongoing" onClick={(e) => handleTabClick(e, 'ongoing')}>On Going</a>
                           </li>
                           <li className="px-4 text-gray-800 font-normal py-2 ">
                               <a href="#all" onClick={(e) => handleTabClick(e, 'all')}>All</a>
                           </li>
                           <li className="px-4 text-gray-800 font-normal py-2 ">
                               <a href="#created" onClick={(e) => handleTabClick(e, 'created')}>Created</a>
                           </li>
                           <li className="px-4 text-gray-800 hidden font-semibold py-2 ">
                               <a href="#fourth">Tab 4</a>
                           </li>
                       </ul>
                   </div>
                    {/* Tab Contents */}
                    <div id="tab-contents" className=" w-10/12 mx-auto">
                        <div id="ongoing" className="p-4">
                            {user === null ?(
                                <div className="gap-4 text-center mx-6" style={{ overflowX: "auto" }}>
                                    <div className="mx-auto my-14">
                                        <h2 style={{  fontSize:"18px", color:"#716f6f"}}>Tidak ada absent yang sedang berlangsung saat ini</h2>
                                        <p style={{  fontSize:"14px", color:"#716f6f"}}>Tenanglah dan kami akan memberi tahu anda jika ada absent yang berlangsung</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full py-5">
                                    <div>
                                        {absentOnGoing.length === 0 ? (
                                            <div className="py-8">
                                                <div className="my-8">
                                                    <div>
                                                        <p className="text-gray-600">Tidak ada Absent yang pernah kamu buat</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ):(
                                            <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                                {absentOnGoing.map((itemAbsentOnGoing) => {
                                                    return(
                                                        <>
                                                            <div key={itemAbsentOnGoing.id}>
                                                                <CardActivityComponent class_id={itemAbsentOnGoing.class_id} id={itemAbsentOnGoing.id} title={itemAbsentOnGoing.title} class={itemAbsentOnGoing.class} vocaton={itemAbsentOnGoing.vocation} teacher={itemAbsentOnGoing.teacher} deadline_time={itemAbsentOnGoing.end_time}  deadline_date={itemAbsentOnGoing.due_date} />
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
                        <div id="all" className="hidden p-4">
                            <div className="w-full py-5">
                                <div>
                                    {absentAll.length === 0 ? (
                                        <div className="py-8">
                                            <div className="my-8">
                                                <div>
                                                    <p className="text-gray-600">Tidak ada Absent yang pernah kamu buat</p>
                                                </div>
                                            </div>
                                        </div>
                                    ):(
                                        <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                            {absentAll.map((itemAbsentAll) => {
                                                return(
                                                    <>
                                                        <div key={itemAbsentAll.id}>
                                                            <CardActivityComponent class_id={itemAbsentAll.class_id}  id={itemAbsentAll.id} title={itemAbsentAll.title} class={itemAbsentAll.class} vocaton={itemAbsentAll.vocation} teacher={itemAbsentAll.teacher} deadline_time={itemAbsentAll.end_time}  deadline_date={itemAbsentAll.due_date} />
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div id="created" className="hidden p-4">
                            <div className="w-full py-5">
                                <div>
                                    {absentCreateByUser.length === 0 ? (
                                        <div className="py-8">
                                            <div className="my-8">
                                                <div>
                                                    <p className="text-gray-600">Tidak ada Absent yang pernah kamu buat</p>
                                                </div>
                                            </div>
                                        </div>
                                    ):(
                                        <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                            {absentCreateByUser.map((itemAbsentCreatedByUser) => {
                                                return(
                                                    <>
                                                        <div key={itemAbsentCreatedByUser.id}>
                                                            <CardActivityComponent class_id={itemAbsentCreatedByUser.class_id}  id={itemAbsentCreatedByUser.id} title={itemAbsentCreatedByUser.title} vocaton={itemAbsentCreatedByUser.vocation} class={itemAbsentCreatedByUser.class} teacher={itemAbsentCreatedByUser.teacher} deadline_time={itemAbsentCreatedByUser.end_time}  deadline_date={itemAbsentCreatedByUser.due_date} />
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