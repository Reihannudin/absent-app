import {Link} from "react-router-dom";

export const CardHorizontalComponent = () => {

    const popUpDetail = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
            console.log('PopUp successfully open')
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
            console.log('PopUp successfully close')
        }
    }

    return(
        <>
        <div className="bg-white w-full my-6 border-radius-8 shadow">
            <div className="w-full  flex">
                <div className="w-4/12 py-5  mx-5 text-left">
                    <h3>Tittle</h3>
                </div>
                <div className="w-3/12 py-5  text-left">
                    <div className="flex w-full">
                        <p>Class : </p>
                        <p>Teacher</p>
                    </div>
                </div>
                <div className="w-2/12 py-5  text-left"><h3>Status</h3></div>
                    <div className="w-2/12 py-5  text-left"><h3>Absent time</h3></div>
                <div className="w-3/12 text-right mx-5">
                    <button id="btn_pop_up_detail" onClick={popUpDetail} className="weverse-background-btn py-2 my-3 border-radius-8 text-white w-7/12" style={{ fontSize:"14px"}}>Detail</button>
                </div>
            </div>
        </div>
        <div id="pop_up_detail" tabIndex="-1" onclose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                <div className="relative bg-white w-8/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"350px"}} >
                    <div className="flex items-start justify-end pt-7 pb-5 px-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-bold w-full ms-5 font-semibold text-center text-gray-900 dark:text-white">
                            Detail Absent
                        </h3>
                        <button type="button"  onClick={popUpDetail} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="my-3">
                        <div className="flex w-10/12 my-4 mx-auto justify-between">
                            <div className="text-left flex gap-1" style={{ fontSize:"14px"}}>
                                <label>Date:</label>
                                <p>07:00,23-03-2023</p>
                            </div>
                            <div className="text-left flex gap-1" style={{ fontSize:"14px"}}>
                                <label>Status:</label>
                                <p>Successfully</p>
                            </div>
                        </div>
                        <div className="flex w-10/12 mx-auto justify-between">
                            <div className="w-10/12">
                                <div className="text-left  gap-1">
                                    <label style={{ fontSize:"14px"}}>Class</label>
                                    <p  style={{ fontSize:"15px"}}>11 TKJ 3</p>
                                </div>
                                <div className="text-left my-2 gap-1">
                                    <label  style={{ fontSize:"14px"}}>Student</label>
                                    <p  style={{ fontSize:"15px"}}>Andrian</p>
                                </div>
                            </div>
                            <div className="w-8/12 text-left">
                                <div className="text-left gap-1" >
                                    <label style={{ fontSize:"14px"}}>Vocational</label>
                                    <p style={{ fontSize:"15px"}}>Website</p>
                                </div>
                                <div className="text-left my-2  gap-1" >
                                    <label style={{ fontSize:"14px"}}>Teacher</label>
                                    <p style={{ fontSize:"15px"}}>M.Rifki</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-6 py-7">
                        <button className="w-full font-medium weverse-background-btn py-2" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" }}>
                            <Link className="w-full" to={`/absent/detail/:id`}>
                                Detail
                            </Link>
                            </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}