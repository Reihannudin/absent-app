import {Link} from "react-router-dom";


export const CardActivityComponent = (props) => {
    return(
        <>
            <div className="bg-white shadow border-radius-8" style={{ maxWidth:"270px"}}>
                <div className="w-full">
                    <div className="w-full">
                        <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                    </div>
                    <div className="block text-left mx-4 py-2 gap-2">
                        <h2 className="font-normal mt-1 mb-0 py-0" style={{ fontSize:"18px"}}>{props.title}</h2>
                        <div className="flex font-thin mt-0 mb-3 justify-between mb-2">
                            <h3 className="my-0 py-0" style={{ fontSize:"14px"}}>{props.class}</h3>
                            <h3 className="my-0 py-0" style={{ fontSize:"14px"}}>{props.vocations}</h3>
                        </div>
                        <h3 className="my-0 py-0" style={{ fontSize:"14px"}}>{props.teacher}</h3>
                        <div className="border-t pt-2 flex justify-between">
                            <div className="my-1">
                                <h3 className="my-auto py-0" style={{ fontSize:"14px"}}>{props.deadline_time} : {props.deadline_date}</h3>
                            </div>
                            <button className="mt-1 py-0.5 mb-1 text-black border-radius-8">
                                <Link to={`/absent/detail/${props.id}/class/${props.class_id}`}>
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