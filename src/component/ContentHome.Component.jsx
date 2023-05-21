
export const ContentHomeComponent = () => {
    return(
        <>
            <div className="w-full  pt-14">
                <div className="w-10/12 pb-10 gap-6 pt-10 flex mx-auto justify-between">
                    <div className="px-10 pb-10 pt-7 w-7/12 mx-5 border-radius-8 bg-white shadow">
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
                    <div className="px-10 pb-10 pt-5 w-4/12 mx-5 shadow border-radius-8 bg-white">
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