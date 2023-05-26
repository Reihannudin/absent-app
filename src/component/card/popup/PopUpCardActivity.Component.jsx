import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export const PopUpCardActivityComponent = ()=> {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    const {id} = useParams();
    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [activity , setActivity] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/activity/recently/${user.id}/${id}`)
            .then((response) => response.json())
            .then((activity => setActivity(activity)))
    } , [])

    return(
        <>
            {activity.map((itemActivity) => {
                console.log(itemActivity.absent);
                return (
                    <>
                        {itemActivity.absent.length === 0 ? (
                            <div  tabIndex="-1" style={{ background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                <div className="absolute w-8/12  mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                                    <div className="relative bg-white lg:w-8/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"470px"}} >
                                        {activity.map((itemActivitySel) => {
                                            return (
                                                <div key={itemActivitySel.id}>
                                                    <div key={itemActivitySel.id}>
                                                        <div   className="flex items-start justify-end pt-7 pb-5 px-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl  w-full ms-5 font-normal text-center text-gray-900 dark:text-white">
                                                                Detail Activity Class
                                                            </h3>
                                                            <button type="button"  onClick={navigateBack} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>
                                                        <div className="my-3" >
                                                            <div className="flex lg:w-10/12 w-full my-4 mx-auto ">
                                                                <div className="text-left flex gap-1" style={{ fontSize:"14px"}}>
                                                                    <label>Date Created:</label>
                                                                    <p>{itemActivitySel.created_at}</p>
                                                                </div>

                                                            </div>
                                                            <div className="text-left my-0 pt-0 pb-4 w-10/12 mx-auto">
                                                                <h2>{itemActivitySel.title}</h2>
                                                                <div className="text-left mx-auto my-0 ">
                                                                    <div className="text-left my-2  gap-1">
                                                                        <label style={{ fontSize:"14px"}}>Code Class</label>
                                                                        {itemActivitySel.classes.map((itemClass) => {
                                                                            return(
                                                                                <p  key={itemClass.id} style={{ fontSize:"16px"}}>{itemClass.code}</p>
                                                                            )
                                                                        })}
                                                                    </div>

                                                                    <div className="flex justify-between mx-auto w-full">
                                                                        <div className="text-left  gap-1">
                                                                            <label style={{ fontSize:"14px"}}>Class Name</label>
                                                                            {itemActivitySel.classes.map((itemClass) => {
                                                                                return(
                                                                                    <p  key={itemClass.id} style={{ fontSize:"18px"}}>{itemClass.name}</p>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                        <div className="text-left  gap-1">
                                                                            <label style={{ fontSize:"14px"}}>Vocation</label>
                                                                            <p style={{ fontSize:"16px"}}>{itemActivitySel.vocational}</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex border-t pt-6 w-10/12 mx-auto justify-between">
                                                                <div className="w-10/12">
                                                                    <div className="text-left my-2 gap-1">
                                                                        <label  style={{ fontSize:"14px"}}>Student</label>
                                                                        <p  style={{ fontSize:"15px"}}>{itemActivitySel.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="w-8/12 text-left">
                                                                    <div className="text-left my-2  gap-1" >
                                                                        <label style={{ fontSize:"14px"}}>Teacher</label>
                                                                        <p style={{ fontSize:"15px"}}>{itemActivitySel.teacher}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mx-6 py-7">
                                                            <button className="w-full font-medium weverse-background-btn py-2" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" }}>
                                                                <Link className="w-full" to={`/absent/detail/:id`}>
                                                                    More Detail
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div  tabIndex="-1" style={{ background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                <div className="absolute w-8/12  mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                                    <div className="relative bg-white lg:w-8/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"470px"}} >
                                        {activity.map((itemActivitySel) => {
                                            return (
                                                <div key={itemActivitySel.id}>
                                                    <div key={itemActivitySel.id}>
                                                        <div   className="flex items-start justify-end pt-7 pb-5 px-4 border-b rounded-t dark:border-gray-600">
                                                            <h3 className="text-xl  w-full ms-5 font-normal text-center text-gray-900 dark:text-white">
                                                                Detail Activity
                                                            </h3>
                                                            <button type="button"  onClick={navigateBack} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                                                                <span className="sr-only">Close modal</span>
                                                            </button>
                                                        </div>
                                                        <div className="my-3" >
                                                            <div className="flex lg:w-10/12 w-full mt-4 mx-auto justify-between">
                                                                <div className="text-left flex gap-1" style={{ fontSize:"14px"}}>
                                                                    <label>Time Absent:</label>
                                                                    {itemActivitySel.absent.map((itemAbsent) => {
                                                                        return (
                                                                            <>
                                                                                <p>{itemAbsent.starttime} : {itemAbsent.endtime}</p>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </div>
                                                                <div className="text-left flex gap-1" style={{ fontSize:"14px"}}>
                                                                    <label>Status:</label>
                                                                    {itemActivitySel.absent.map((itemAbsent) => {
                                                                        return (
                                                                            <>
                                                                                {itemAbsent.detail_absent.map((itemDetailAbsent) => {
                                                                                    return(
                                                                                        <>
                                                                                            <p style={{ fontSize:"15px"}}>{itemDetailAbsent.confirmation}</p>
                                                                                        </>
                                                                                    )
                                                                                })}
                                                                            </>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                            <div className="text-left w-10/12 mx-auto flex gap-1" style={{ fontSize:"14px"}}>
                                                                <label>Date:</label>
                                                                {itemActivitySel.absent.map((itemAbsent) => {
                                                                    return (
                                                                        <>
                                                                            <p>{itemAbsent.date} </p>
                                                                        </>
                                                                    )
                                                                })}
                                                            </div>
                                                            <div className="text-left my-0 pt-0 pb-4 w-10/12 mx-auto">
                                                                <h2>{itemActivitySel.title}</h2>
                                                                <div className="w-full mx-auto my-2 ">
                                                                    <div className="flex mx-auto w-full justify-between">
                                                                        <div className="text-left  gap-1">
                                                                            <label style={{ fontSize:"14px"}}>Action</label>
                                                                            {itemActivitySel.absent.map((itemAbsent) => {
                                                                                return (
                                                                                    <>
                                                                                        {itemAbsent.detail_absent.map((itemDetailAbsent) => {
                                                                                            return(
                                                                                                <>
                                                                                                    <p style={{ fontSize:"15px"}}>{itemDetailAbsent.action}</p>
                                                                                                </>
                                                                                            )
                                                                                        })}
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                        <div className="text-left gap-1">
                                                                            <label  style={{ fontSize:"14px"}}>Reason</label>
                                                                            {itemActivitySel.absent.map((itemAbsent) => {
                                                                                return (
                                                                                    <>
                                                                                        {itemAbsent.detail_absent.map((itemDetailAbsent) => {
                                                                                            return(
                                                                                                <>
                                                                                                    <p style={{ fontSize:"15px"}}>{itemDetailAbsent.reason}</p>
                                                                                                </>
                                                                                            )
                                                                                        })}
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex border-t pt-6 w-10/12 mx-auto justify-between">
                                                                <div className="w-10/12">
                                                                    <div className="text-left  gap-1">
                                                                        <label style={{ fontSize:"14px"}}>Class</label>
                                                                        {itemActivitySel.classes.map((itemClass) => {
                                                                            return(
                                                                                <p key={itemClass.id}  style={{ fontSize:"15px"}}>{itemClass.name}</p>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    <div className="text-left my-2 gap-1">
                                                                        <label  style={{ fontSize:"14px"}}>Student</label>
                                                                        <p  style={{ fontSize:"15px"}}>{itemActivitySel.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="w-8/12 text-left">
                                                                    <div className="text-left gap-1" >
                                                                        <label style={{ fontSize:"14px"}}>Time absent</label>
                                                                        {itemActivitySel.absent.map((itemAbsent) => {
                                                                            return (
                                                                                <>
                                                                                    {itemAbsent.detail_absent.map((itemDetailAbsent) => {
                                                                                        return(
                                                                                            <>
                                                                                                <p style={{ fontSize:"15px"}}>{itemDetailAbsent.absent_time}</p>
                                                                                            </>
                                                                                        )
                                                                                    })}
                                                                                </>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                    <div className="text-left my-2  gap-1" >
                                                                        <label style={{ fontSize:"14px"}}>Teacher</label>
                                                                        <p style={{ fontSize:"15px"}}>{itemActivitySel.teacher}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mx-6 py-7">
                                                            <button className="w-full font-medium weverse-background-btn py-2" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" }}>
                                                                <Link className="w-full" to={`/absent/detail/:id`}>
                                                                    More Detail
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                );
            })}
        </>
    )
}
