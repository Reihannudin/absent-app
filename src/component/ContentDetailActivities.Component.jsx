import {CardActivityComponent} from "./card/CardActivity.Component";
import {Link} from "react-router-dom";


export const ContentDetailActivitiesComponent = () => {

    const popUpDetail = () => {
        const popUp = document.getElementById('pop_up_detail');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if(popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }
    return(
        <>
            <div className="">
                <div  className=" pb-10 gap-6 ">
                    <div className="bg-white">
                        <div className="md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-2 grid-cols-1">
                            <div className="text-left mx-10 my-6">
                                <div className=" mb-6  text-left" style={{ height:"24px"}}>
                                    <img className="text-left my-auto h-full" src="/assets/Wetrix.svg" alt="" />
                                </div>
                                <div className="w-full pb-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Date</label>
                                            <p className="my-0 py-0" style={{ fontSize:"15px"}}>Thurstday, MAR 26 2022</p>
                                        </div>
                                        <div>
                                            <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Teacher</label>
                                            <p className="my-0 py-0" style={{ fontSize:"15px"}}>Eko Kurniawan Khannedy</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Time</label>
                                        <p className="my-0 py-0" style={{ fontSize:"15px"}}>06:00 - 07:30</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="block pt-3 gap-4 w-10/12 ">
                                    <h1 style={{ fontSize:"22px" , fontWeight:"450"}}>Terms of reference</h1>
                                    <p className="my-2" style={{ fontSize:"14px" , color:"#3e3e3e"}}>Each member is required to be absent before the specified deadline, Each member is welcome to choose to use the absent method that has been provided, This absence will be saved automatically, if you are successfully absent</p>
                                </div>
                                <div>
                                    <img src="/assets/absent-img.svg"/>
                                </div>
                            </div>
                            <div className="lg:w-7/12 w-11/12 my-5 mx-auto">
                                <div className="shadow pb-6 border-radius-8">
                                    <div className="flex mx-4 py-5 justify-between">
                                        <h2 style={{ fontSize:"18px"}}>Your Absent</h2>
                                        <p className="my-1" style={{fontSize:"14px"}}>To Absent</p>
                                    </div>
                                    <div className="mx-4">
                                        <button onClick={popUpDetail} className="w-full py-2 weverse-background-btn text-white border-radius-4">
                                            Absent now
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pop_up_detail" tabIndex="-1" onclose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                    <div className="relative bg-white w-8/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"520px"}} >
                        <div className="flex items-start justify-end pt-7 pb-5 px-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg my-1 w-full ms-5 font-normal text-center text-gray-900 dark:text-white">
                                Absent your attendance
                            </h3>
                            <button type="button"  onClick={popUpDetail} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="my-3">
                            <div className="w-10/12 my-4 text-left mx-auto" >
                                <div className="my-2">
                                    <p>Anda akan absent menggunakan password dari email ini</p>
                                    <input type="email" disabled className="w-full py-3 font-normal border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                                </div>
                                <div className="my-3">
                                    <div className="my-2">
                                        <label style={{ color:"#777575" , fontSize:"14px"}}>Action</label>
                                        <div className="flex">
                                            <select name="biller" className="w-full py-2 cursor-pointer form-select mb-1"
                                                    aria-label="Default select example" id="biller">
                                                <option selected disabled value="none" >Pilih Option Absent
                                                </option>
                                                <option >Present</option>
                                                <option >Permission</option>
                                            </select>
                                            <button >
                                                <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="my-0">
                                        <label style={{ color:"#777575" , fontSize:"14px"}}>Reason</label>
                                        <div className="flex">
                                            <input id="reason" required   type="text" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your Reason"/>
                                            <button >
                                                <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label style={{ color:"#777575" , fontSize:"14px"}}>Password</label>
                                        <div className="flex">
                                            <input id="password" required   type="password" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your password"/>
                                            <button >
                                                <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                    {/*<a href="http://127.0.0.1:8000/login/form?email=${email}&password=${password}">*/}
                                    <a  href="/">
                                        {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                                        <div  className="w-full font-medium py-2.5 weverse-background-btn text-center mt-5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #A373E9" }}>Absent</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}