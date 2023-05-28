import {Link} from "react-router-dom";

export const CardPeopleComponent = (props) => {

    return(
        <>
            <div className="bg-white w-full my-1 border-radius-8 shadow">
                <div className="w-full justify-between flex">
                    <div className="flex">
                        <div className="w-6/12 py-5  mx-5 text-left">
                            <h3>{props.name}</h3>
                        </div>
                    </div>
                    <div className="w-5/12 text-right mx-5">
                        <a  href={`/absent/${props.user_id}/detail/${props.id}`}>
                            <button id="btn_pop_up_detail"  className="weverse-background-btn py-1.5 my-3 border-radius-8 text-white w-7/12" style={{ fontSize:"14px"}}>Detail</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}