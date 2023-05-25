import {useState} from "react";

export const ContentHomeComponent = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const popUpCreate = () => {
        const popUp = document.getElementById('pop_up_create');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    return(
        <>
            <div className="w-full h-full  md:pt-14  pt-16 ">
                <div className="lg:w-10/12 md:w-11/12 w-11/12 lg:pb-10 md:pb-4 lg:gap-6 md:gap-2 pt-10 md:flex block mx-auto justify-between">
                    <div className="px-10 pb-10 pt-7 my-8 md:my-0 lg:w-7/12 md:w-7/12  mx-5 border-radius-8 bg-white shadow">
                        <div className="text-left w-10/12 mx-auto">
                            <label className="text-gray-400" style={{ fontSize:"16px" , color:"#969696"}}>Join New Class</label>
                            <div className="flex mt-2">
                                <input className="w-10/12 pt-2 pb-1" style={{ border:"1px solid #C9C5C5" , borderRadius:"4px 0px 0px 4px"}} type="text"/>
                                <button className="w-2/12  pt-2 pb-1" style={{ background:"#A373E9" , color:"white" , borderRadius:"0px 4px 4px 0px" }}>
                                    S
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-10 pb-10 pt-5 my-8 md:my-0 lg:w-4/12 md:w-4/12 mx-5 shadow border-radius-8 bg-white">
                        <div className="block gap-3">
                            <h2 className="font-normal mt-1.5 mb-3 ext-gray-400" style={{ fontSize:"16px" ,  color:"#969696"}}>Create your own class</h2>
                            <button onClick={popUpCreate} className="w-10/12 pt-2 pb-1 border-radius-8 mx-auto" style={{ background:"#A373E9" , fontSize:"16px", color:"white" }}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pop_up_create" tabIndex="-1"  style={{ display:"none", minWidth:"588px" }} className="absolute top-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 md:h-full h-full">
                <div className="relative w-full h-full" style={{background:"rgba(75,75,75,0.67)"}}>
                    <div className="absolute xl:w-6/12 lg:w-9/12 w-10/12  mx-auto h-full  max-w-2xl md:h-auto left-right-pop-up"  >
                        <div className="relative  mt-5 bg-white sm:w-8/12 w-9/12  top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"385px"}} >
                            <div className="flex items-start justify-end pt-7 pb-5 px-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg my-1 w-full ms-5 font-normal text-center text-gray-900 dark:text-white">
                                    Create your class
                                </h3>
                                <button type="button"  onClick={popUpCreate} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="my-3">
                                <div className="w-10/12 my-4 text-left mx-auto" >
                                    <div className="my-2">
                                        <p>Buat kelas untuk membuat absent</p>
                                        {/*<input type="email" disabled className="w-full py-3 font-normal border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>*/}
                                    </div>
                                    <div className="my-3">
                                        <label style={{ color:"#777575" , fontSize:"14px"}}>Class name</label>
                                        <div className="flex">
                                            <input id="reason" required   type="text" className="w-full py-2 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="Your class name"/>
                                            <button >
                                                <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="my-2">
                                            <label style={{ color:"#777575" , fontSize:"14px"}}>Vocation</label>
                                            <div className="flex">
                                                <select  className="w-full py-2 cursor-pointer form-select mb-1" defaultValue={selectedOption} onChange={handleChange}>
                                                    <option value="option1">Option 1</option>
                                                    <option value="option2">Option 2</option>
                                                    <option value="option3">Option 3</option>
                                                </select>
                                                <button >
                                                    <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                        {/*<a href="http://127.0.0.1:8000/login/form?email=${email}&password=${password}">*/}
                                        <a  href="/">
                                            {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                                            <div  className="w-full font-medium py-2.5 weverse-background-btn text-center mt-8" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #A373E9" }}>Absent</div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}