import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const PopUpCardAbsentClassComponent = (props) => {

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    };

    const { id , absent_id  } = useParams();

    const [absent , setAbsent] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/history/absent/${id}/${absent_id}`)
            .then((response) => response.json())
            .then((absent => setAbsent(absent)))
    } , []);

    return(
        <>
            <div id="pop_up_detail" tabIndex="-1"  style={{ background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                    <div className="relative bg-white w-8/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"500px"}} >
                        {absent.map((itemAbsent) => {
                            return(
                                <>
                                    <div>

                                                               <div className="flex items-start justify-end pt-7 pb-5 px-4 border-b rounded-t dark:border-gray-600">
                                                                   <h3 className="text-xl w-full ms-5 font-normal text-center text-gray-900 dark:text-white">
                                                                       Detail Absent
                                                                   </h3>
                                                                   <button type="button"  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                       <span className="sr-only">Close modal</span>
                                                                   </button>
                                                               </div>
                                                               <div className="my-3">
                                                                   <div className="flex w-10/12 my-4 mx-auto justify-between">
                                                                       <div className="text-left flex gap-1" style={{ fontSize:"14px"}}>
                                                                           <label>Deadline</label>
                                                                           <p>{itemAbsent.absent_endtime} : {itemAbsent.absent_date}</p>
                                                                       </div>
                                                                       <div className="text-left flex gap-1" style={{ fontSize:"14px"}}>
                                                                           <label>Status:</label>
                                                                           <p>{itemAbsent.status}</p>
                                                                       </div>
                                                                   </div>
                                                                   <div className="">
                                                                       <div className="w-10/12 mx-auto flex">
                                                                           <div className="w-10/12 mt-1 mb-2 mx-auto">
                                                                               <div className="text-left  gap-1">
                                                                                   <label style={{ fontSize:"14px"}}>Title</label>
                                                                                   <p  style={{ fontSize:"16px"}}>{itemAbsent.absent_name}</p>
                                                                               </div>
                                                                           </div>
                                                                           <div className="w-10/12 mt-1 mb-2 mx-auto">
                                                                               <div className="text-left  gap-1">
                                                                                   <label style={{ fontSize:"14px"}}>Action</label>
                                                                                   <p  style={{ fontSize:"16px"}}>{itemAbsent.action}</p>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                      <div>
                                                                          <div className="flex pb-4 mb-4  border-b w-10/12 mx-auto justify-between">
                                                                              <div className="w-10/12">
                                                                                  <div className="text-left  gap-1">
                                                                                      <label style={{ fontSize:"14px"}}>Time Absent</label>
                                                                                      <p  style={{ fontSize:"15px"}}>{itemAbsent.absent_time}</p>
                                                                                  </div>
                                                                              </div>
                                                                              <div className="w-10/12">
                                                                                  <div className="text-left  gap-1">
                                                                                      <label style={{ fontSize:"14px"}}>Reason</label>
                                                                                      <p  style={{ fontSize:"15px"}}>{itemAbsent.reason}</p>
                                                                                  </div>
                                                                              </div>
                                                                          </div>

                                                                      </div>
                                                                   </div>
                                                                   <div className="flex w-10/12 mx-auto justify-between">
                                                                       <div className="w-10/12">
                                                                           <div className="text-left  gap-1">
                                                                               <label style={{ fontSize:"14px"}}>Class</label>
                                                                               <p  style={{ fontSize:"15px"}}>{itemAbsent.class_name}</p>
                                                                           </div>
                                                                           <div className="text-left my-2 gap-1">
                                                                               <label  style={{ fontSize:"14px"}}>Student</label>
                                                                               <p  style={{ fontSize:"15px"}}>{itemAbsent.student_name}</p>
                                                                           </div>
                                                                       </div>
                                                                       <div className="w-8/12 text-left">
                                                                           <div className="text-left gap-1" >
                                                                               <label style={{ fontSize:"14px"}}>Vocational</label>
                                                                               <p style={{ fontSize:"15px"}}>{itemAbsent.vocation}</p>
                                                                           </div>
                                                                           <div className="text-left my-2  gap-1" >
                                                                               <label style={{ fontSize:"14px"}}>Teacher</label>
                                                                               <p style={{ fontSize:"15px"}}>{itemAbsent.teacher}</p>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="mx-6 py-3">
                                                                   <Link className="w-full" to={`/absent/${props.id}`}>
                                                                       <button id="btn_pop_up_detail"  className="weverse-background-btn py-2 my-3 border-radius-8 text-white w-full" style={{ fontSize:"14px"}}>Detail</button>
                                                                   </Link>
                                                               </div>
                                                           </div>

                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}