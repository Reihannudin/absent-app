
export const CardAbsentComponent = () => {
    return(
        <>
            <div className="bg-white shadow border-radius-8" style={{ minWidth:"200px" , maxWidth:"200px", width:"200px"}}>
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                    </div>
                    <div className="block text-left mx-4 py-2 gap-4">
                        <h2 className="font-semibold">Title</h2>
                        <h3 style={{ fontSize:"14px"}}>Deadline</h3>
                        <div className="flex justify-between my-2">
                            <h3 style={{ fontSize:"14px"}}>Class</h3>
                            <h3 style={{ fontSize:"14px"}}>Teacher</h3>
                        </div>
                        <button className="weverse-background-btn mt-3 py-0.5 mb-1 text-white w-full border-radius-8">Detail</button>
                    </div>
                </div>
            </div>
        </>
    )
}