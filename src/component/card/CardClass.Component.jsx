
export const CardClassComponent = () => {
    return(
        <>
            <div className="bg-white shadow border-radius-8" style={{ maxWidth:"270px"}}>
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                    </div>
                    <div className="block text-left mx-4 py-2 gap-4">
                        <h2 className="font-semibold my-0 py-0" style={{ fontSize:"20px"}}>Title</h2>
                        <h3 className="font-normal mt-0 mb-2 py-0" style={{ fontSize:"16px"}}>Teacher</h3>
                        <div className="border-t pt-2 flex justify-between">
                            <div className="my-1">
                                <p style={{ fontSize:"12px"}}>there is 1 should be done</p>
                            </div>
                            <button className="mt-1 py-0.5 mb-1 text-black border-radius-8">
                                <div style={{ height:"18px"}}>
                                    <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}