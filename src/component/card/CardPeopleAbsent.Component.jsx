import {Link} from "react-router-dom";


export const CardPeopleAbsentComponent = (props) => {


    return(
        <>
            <div className="bg-white w-full my-6 border-radius-8 shadow">
                <div className="w-full justify-between flex">
                    <div className="w-4/12 py-5  mx-5 text-left">
                        <h3 style={{ fontSize:"18px"}}>{props.name}</h3>
                    </div>
                    <div className="w-4/12 flex ">
                        {/*<div className="w-full py-5  text-left"><h3>{props}</h3></div>*/}
                        {/*<div className="w-full py-5  text-left"><h3>{props.}</h3></div>*/}
                    </div>
                    <div className="w-3/12 text-right mx-5">
                        <a href={`/absent/${props.user_id}/detail/${props.id}`}>
                            <button id="btn_pop_up_detail" className="weverse-background-btn py-2 my-3 text-white w-full" style={{ borderRadius:"4px",fontSize:"14px"}}>Detail</button>
                        </a>
                    </div>
                    <div className="w-2/12 gap-1 flex">
                        <div className="w-4/12">
                            <button id="btn_pop_up_detail" className="bg-white py-2 my-2 border-radius-8 text-white w-full" style={{ fontSize:"14px"}}>
                                <div className="py-1.5 border-radius-8" style={{ border:"1px solid #E30C0C"}}>
                                    <div  style={{ height:"18px"}}>
                                        <img className="w-full h-full" src="/assets/close-icon.svg" />
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="w-4/12">
                            <button id="btn_pop_up_detail" className="bg-white py-2 my-2 border-radius-8 text-white w-full" style={{ fontSize:"14px"}}>
                                <div className="py-1.5 border-radius-8" style={{ border:"1px solid #60BF3F"}}>
                                    <div  style={{ height:"18px"}}>
                                        <img className="w-full h-full" src="/assets/check-icon.svg" />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}