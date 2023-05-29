import {Link} from "react-router-dom";


export const CardMyClassDetailComponent = (props) => {

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
            <div className="bg-white shadow border-radius-8" style={{ maxWidth:"270px"}}>
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                    </div>
                    <div className="block text-left mx-4 py-1 gap-4">
                        <div className="relative">
                            <div className="flex justify-between">
                                <h2 className="font-normal my-1 py-0" style={{ fontSize:"18px"}}>{props.title}</h2>
                                <div className="mt-2" style={{ height:"20px"}}>
                                    <button onClick={popUpDetail} style={{ height:"20px"}}>
                                        <img className="w-full h-full" src="/assets/menu-icon.svg"/>
                                    </button>
                                </div>
                            </div>

                        </div>
                         <div className="my-1 pb-2">
                            <p className="my-auto py-0" style={{ fontSize:"12px"}}>{props.deadline} : {props.date}</p>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                            <div className="my-1">
                                <h3 className="my-auto py-0" style={{ fontSize:"14px"}}>{props.status}</h3>
                            </div>
                            <button className="mt-1 py-0.5 mb-1 text-black border-radius-8">
                                <Link to={`/my/absent/detail/${props.id}`}>
                                    <div style={{ height:"18px"}}>
                                        <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pop_up_detail" tabIndex="-1" onclose={popUpDetail}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                    <div className="relative bg-white w-8/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"440px"}} >
                        <div className="flex items-start justify-end pt-7 pb-5 px-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg my-1 w-full ms-5 font-normal text-center text-gray-900 dark:text-white">
                                Edit Your Absent
                            </h3>
                            <button type="button"  onClick={popUpDetail} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="my-3">
                            <div className="w-10/12 my-4 text-left mx-auto" >
                                <div className="my-2">
                                    <label style={{ color:"#777575" , fontSize:"14px"}}>Title</label>
                                    <input type="text" className="w-full py-3 font-normal border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                                </div>
                                <div className="my-3">
                                    <div className="flex justify-between">
                                        <div className="my-0">
                                            <label style={{ color:"#777575" , fontSize:"14px"}}>Due</label>
                                            <div className="flex">
                                                <input id="reason" required   type="time" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your Reason"/>
                                                <button >
                                                    <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="my-0">
                                            <label style={{ color:"#777575" , fontSize:"14px"}}>Date</label>
                                            <div className="flex">
                                                <input id="reason" required   type="date" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your Reason"/>
                                                <button >
                                                    <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <label style={{ color:"#777575" , fontSize:"14px"}}>Description</label>
                                        <div className="flex">
                                            <textarea id="password" required   type="text" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your description"/>
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