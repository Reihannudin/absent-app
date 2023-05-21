
export const CardHorizontalComponent = () => {
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
                    <button className="weverse-background-btn py-2 my-3 border-radius-8 text-white w-7/12" style={{ fontSize:"14px"}}>Detail</button>
                </div>
            </div>
        </div>
        </>
    )
}