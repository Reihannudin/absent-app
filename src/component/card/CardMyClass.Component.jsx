
import {Link} from "react-router-dom";

export const CardMyClassComponent = (props) => {
    return(
        <>
            <div className="bg-white shadow border-radius-8" style={{ maxWidth:"270px"}}>
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                    </div>
                    <div className="block text-left mx-4 py-2 gap-4">
                        <h2 className="font-normal my-0 py-0" style={{ fontSize:"18px"}}>{props.title}</h2>
                        <h3 className="font-thin mt-0 mb-2 py-0" style={{ fontSize:"14px"}}>{props.teacher}</h3>
                        <div className="border-t pt-2 flex justify-between">
                            <div className="my-1">
                                {props.length === undefined ? (
                                    <p style={{ fontSize:"12px"}}>there is no absent</p>
                                ) : (
                                    <p style={{ fontSize:"12px"}}>there is {props.length} absent</p>
                                )}
                            </div>
                            <button className="mt-1 py-0.5 mb-1 text-black border-radius-8">
                                <Link to={`/my/class/detail/${props.id}`}>
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