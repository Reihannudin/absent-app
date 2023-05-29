import {CardHorizontalComponent} from "./card/CardHorizontal.Component";
import {useEffect, useState} from "react";
import {PopUpCardHistoryComponent} from "./card/popup/PopUpCardHistory.Component";


export const HistoryListComponent = () => {

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [history , setHistory] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/history/absent/${user.id}`)
            .then((response) => response.json())
            .then((history => setHistory(history)))
    } , [])
    // http://127.0.0.1:8000/api/history/absent/10

    return(
        <>
            <div className="w-full bg-white">
                <div className="lg:w-10/12 md:w-11/12  w-10/12  py-6 my-4 mx-auto">
                    <div className="mx-6 text-left ">
                        <h3 style={{ fontSize:"24px"}}>History</h3>
                    </div>
                    <div className="w-full my-4 mx-auto ">
                        {history.length === 0 ?(
                            <div className="gap-4 text-center mx-6" style={{ overflowX: "auto" }}>
                                <div className="mx-auto my-7">
                                    <h2 style={{  fontSize:"18px", color:"#716f6f"}}>Kamu tidak punya history absent terakhir</h2>
                                    <p style={{  fontSize:"14px", color:"#716f6f"}}>lakukan absent sekarang juga</p>
                                    <div className="lg:w-2/12 md:w-3/12 w-4/12 mx-auto">
                                        <a  href="/login">
                                            <div  className="w-full font-medium py-1.5 weverse-background-btn text-center mt-3" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #A373E9" }}>Absent</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="gap-6 mx-6">
                                {history.map((itemHistory) => {
                                    return (
                                        <li className="list-none" key={itemHistory.id}>
                                            <CardHorizontalComponent
                                                student_name={itemHistory.student_name}
                                                id={itemHistory.id}
                                                absent_starttime={itemHistory.absent_starttime}
                                                absent_endtime={itemHistory.absent_endtime}
                                                title={itemHistory.absent_name}
                                                class={itemHistory.class_name}
                                                action={itemHistory.action}
                                                teacher={itemHistory.teacher}
                                                reason={itemHistory.reason}
                                                confirmation={itemHistory.confrimation}
                                                timeAbsent={itemHistory.absent_time}
                                            />
                                        </li>
                                    );
                                })}
                            </div>

                        )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}