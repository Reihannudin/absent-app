import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

function CreateActivities(){

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [classes , setClasses] = useState('');
    const [vocation , setVocation] = useState('');
    const [title , setTitle] = useState('');
    const [date , setDate] = useState('');
    const [startTime , setStartTime] = useState('');
    const [endTime , setEndTime] = useState('');

    const onChangeClasses = (event) => {
        const classes = event.target.value;
        setClasses(classes)
    }

    const onChangeVocation = (event) => {
        const vocation = event.target.value;
        setVocation(vocation)
    }

    const onChangeTitle = (event) => {
        const title = event.target.value;
        setTitle(title)
    }

    const onChangeDate = (event) => {
        const date = event.target.value;
        setDate(date)
    }

    const onChangeStartTime = (event) => {
        const startTime = event.target.value;
        setStartTime(startTime)
    }

    const onChangeEndTime = (event) => {
        const endTime = event.target.value;
        setEndTime(endTime)
    }

    const [searchParams] = useSearchParams();
    const classesId = searchParams.get('classesId');
    const vocationId = searchParams.get('vocationId');

    const [data , setData] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/class/${user.id}/`)
            .then((response) => response.json())
            .then((data => setData(data)))
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
                                <h4 style={{ fontSize:"16px"}}>Class Name</h4>
                                <p style={{ fontSize:"14px"}}>Teacher Name</p>
                            </div>
                        </div>
                        <div className="">
                        </div>
                    </div>
                </header>
            </nav>
            <div style={{ background:"#ffffff"}}>
                <div className="xl:w-9/12 lg:w-10/12 w-10/12 mx-auto">
                    <div className="my-8">
                        <div className="w-full  ">
                            <div className="flex w-full text-left ">
                                {data.map((itemData) => {
                                    return(
                                        <>
                                            <div className="flex w-full text-left " key={itemData.id}>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Class Name</label>
                                                    <div className="flex  w-11/12">
                                                        <input id="class" required value={itemData.name}  type="text" disabled className="w-11/12 py-2.5 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Your class name"/>
                                                    </div>
                                                </div>
                                                <div className="mt-3 w-full mx-auto">
                                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Vocation</label>
                                                    <div className="flex w-11/12">
                                                        <input id="class" required value={itemData.vocation} type="text" disabled className="w-11/12 py-2.5 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Your class name"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="flex w-full text-left justify-between">
                                <div className="mt-3 w-6/12 mx-auto">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Absent Title</label>
                                    <div className="flex">
                                        <input id="class" required  value={title} onChange={onChangeTitle} type="text" className="w-10/12 py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Your class name"/>
                                        <button >
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3 w-6/12 mx-auto">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Date Absent</label>
                                    <div className="flex w-10/12">
                                        <input id="class"  required value={date} onChange={onChangeDate} type="date" className="w-10/12 py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Your class name"/>
                                        <button >
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-6/12 my-6 text-left justify-between">
                                <div className="mt-3 w-6/12 mx-auto">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Start Time</label>
                                    <div className="flex">
                                        <input id="starttime" required  value={startTime} onChange={onChangeStartTime} type="time" className="w-10/12 py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Your class name"/>
                                        <button >
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3 w-6/12 mx-auto">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>End Time</label>
                                    <div className="flex w-10/12">
                                        <input id="endtime"  required value={endTime}  onChange={onChangeEndTime}  type="time" className="w-10/12 py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Your class name"/>
                                        <button >
                                            <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-6/12 mt-20 text-right">
                                <a href={`http://127.0.0.1:8000/api/teacher/${user.id}/create/absent?title=${title}&date=${date}&starttime=${startTime}&endtime=${endTime}&classesId=${classesId}&vocationId=${vocationId}`}>
                                    <button className="shadow weverse-background-btn py-2 lg:px-4 md:px-6 px-8 text-white " style={{ borderRadius:"4px"}}>
                                        Create Absent
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateActivities