

export const CardPeopleAbsentComponent = () => {
    return(
        <>
            <div className="bg-white w-full my-6 border-radius-8 shadow">
                <div className="w-full justify-between flex">
                    <div className="w-4/12 py-5  mx-5 text-left">
                        <h3>Name</h3>
                    </div>
                    <div className="w-4/12 flex ">
                        <div className="w-full py-5  text-left"><h3>Student</h3></div>
                        <div className="w-full py-5  text-left"><h3>Status</h3></div>
                    </div>
                    <div className="w-4/12 text-right mx-5">
                        <button className=" py-2 my-3 border-radius-8 w-7/12" style={{ color:"#A373E9" , border:"1px solid #A373E9" ,fontSize:"14px"}}>Detail</button>
                    </div>
                </div>
            </div>
        </>
    )
}