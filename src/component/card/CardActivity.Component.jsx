import {Link} from "react-router-dom";


export const CardActivityComponent = () => {
    return(
        <>
            <div className="bg-white shadow border-radius-8" style={{ maxWidth:"270px"}}>
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                    </div>
                    <div className="block text-left mx-4 py-2 gap-2">
                        <h2 className="font-normal my-0 py-0" style={{ fontSize:"20px"}}>Title</h2>
                        <div className="flex font-thin justify-between mb-2">
                            <h3 className="my-0 py-0" style={{ fontSize:"14px"}}>Class</h3>
                            <h3 className="my-0 py-0" style={{ fontSize:"14px"}}>Teacher</h3>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                            <div className="my-1">
                                <h3 className="my-auto py-0" style={{ fontSize:"14px"}}>Deadline</h3>
                            </div>
                            <button className="mt-1 py-0.5 mb-1 text-black border-radius-8">
                                <Link to={`/absent/detail/:id`}>
                                    <div style={{ height:"18px"}}>
                                        <img src="/assets/arrows-right.svg" className="w-full h-full" />
                                    </div>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}