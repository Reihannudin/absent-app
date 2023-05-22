
export const ContentHomeComponent = () => {

    return(
        <>
            <div className="w-full  md:pt-14  pt-16 ">
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
                            <h2 className="font-normal mt-1.5 mb-3 ext-gray-400" style={{ fontSize:"16px" ,  color:"#969696"}}>Create your own absent</h2>
                            <button className="w-10/12 pt-2 pb-1 border-radius-8 mx-auto" style={{ background:"#A373E9" , fontSize:"16px", color:"white" }}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}