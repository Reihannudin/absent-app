import {CardAbsentComponent} from "./card/CardAbsent.Component";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const RecentlyListComponent = () => {

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [activity , setActivity] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/activity/recently/${user.id}`)
            .then((response) => response.json())
            .then((activity => setActivity(activity)))
    } , [])

    console.log(activity)

    return(
        <>
            <div className="w-full py-5  mt-5 lg:mb-10 md:mb-5 bg-white">
                <div className="lg:w-10/12 md:w-11/12  w-10/12 mx-auto">
                    <div className="flex mx-6 justify-between">
                        <div>
                            <h3 style={{ fontSize:"24px"}}>Activity Recently</h3>
                        </div>
                        <div>
                            <Link to={`/`}>
                                <p className="my-auto" style={{ fontSize:"18px" , margin:"3px 0px"}}>See All</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full my-4 mx-auto">
                        {activity.length === 0  ?(
                            <div className="gap-4 text-center mx-6" style={{ overflowX: "auto" }}>
                               <div className="mx-auto my-7">
                                   <h2 style={{  fontSize:"18px", color:"#716f6f"}}>Kamu tidak punya aktivitas terakhir</h2>
                                   <p style={{  fontSize:"14px", color:"#716f6f"}}>Buat atau lakukan absent sekarang juga</p>
                                   <div className="lg:w-2/12 md:w-3/12 w-4/12  mx-auto">
                                       <a  href="/login">
                                           <div  className="w-full font-medium py-1.5 weverse-background-btn text-center mt-3" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #A373E9" }}>Absent</div>
                                       </a>
                                   </div>
                               </div>
                            </div>
                        ) : (
                            <div className="flex gap-4 overscroll-x-auto mx-6" style={{ overflowX: "auto" }}>
                                {activity.map((itemActivity) => (
                                    <div  key={itemActivity.id} className="bg-white shadow border-radius-8" style={{ minWidth:"200px" , maxWidth:"200px", width:"200px" , height:"230px"}}>
                                        <div className="w-full h-full">
                                            <div className="w-full">
                                                <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                                            </div>
                                            <div className="block text-left mx-4 py-2 gap-4">
                                                <div className="relative">
                                                    <div className="absolute top-0">
                                                        {itemActivity.absent.map((itemActivityAbsent) => (
                                                            <h2 className="font-normal" key={itemActivityAbsent.id}>{itemActivityAbsent.title}</h2>
                                                        ))}
                                                        {itemActivity.classes.map((itemActivityClass) => (
                                                            <div key={itemActivityClass.id}>
                                                                <h3 style={{ fontSize:"15px"}}>{itemActivityClass.name}</h3>
                                                            </div>
                                                        ))}
                                                            <div key={itemActivity.id}>
                                                                <h3 style={{ fontSize:"12px"}}>{itemActivity.name}</h3>
                                                            </div>
                                                        {itemActivity.absent.map((itemActivityAbsent) => (
                                                            <div className="flex justify-between my-2" key={itemActivityAbsent.id}>
                                                                <h3 style={{ fontSize:"10px", color:"#969595"}}>{itemActivityAbsent.endtime}</h3>
                                                                <h3 style={{ fontSize:"10px", color:"#969595"}}>{itemActivityAbsent.date}</h3>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="absolute w-full top-16">
                                                        <a  href={`/activities/${itemActivity.id}`}>
                                                            <button className=" w-full weverse-background-btn mt-3 py-0.5 mb-1 text-white " style={{ borderRadius:"4px"}}>Detail</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}