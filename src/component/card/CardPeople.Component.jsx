
export const CardPeopleComponent = () => {
    return(
        <>
            <div className="bg-white w-full my-6 border-radius-8 shadow">
                <div className="w-full justify-between flex">
                    <div className="flex">
                        <div className="w-6/12 py-5  mx-5 text-left">
                            <h3>Name</h3>
                        </div>
                        <div className="w-6/12 py-5  text-left"><h3>Student</h3></div>
                    </div>
                    <div className="w-6/12 text-right mx-5">
                        <button className="weverse-background-btn py-2 my-3 border-radius-8 text-white w-7/12" style={{ fontSize:"14px"}}>Detail</button>
                    </div>
                </div>
            </div>
        </>
    )
}