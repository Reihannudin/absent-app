import {Link} from "react-router-dom";
import {use} from "bcrypt/promises";
import {useEffect, useState} from "react";

export const CardHorizontalComponent = (props) => {

    return(
        <>
        <div key={props.id} className="bg-white w-full my-6 border-radius-8 shadow">
            <div className="w-full  flex">
                <div className="md:w-6/12 w-3/12 py-5  mx-5 text-left">
                    <h3>{props.title}</h3>
                </div>
                <div className="md:w-7/12 w-8/12  flex">
                    <div className="w-6/12 py-3  text-left">
                        <h3 style={{ fontSize:"14px"}}>{props.class}</h3>
                        <h3 style={{ fontSize:"14px"}}>{props.teacher}</h3>
                    </div>
                    <div className="w-6/12 py-3  text-left">
                        <h3 style={{ fontSize:"14px"}}>{props.action} : {props.reason}</h3>
                        <h3 style={{ fontSize:"14px"}}>{props.timeAbsent}</h3>
                    </div>
                    <div className="lg:w-4/12 w-3/12 text-right lg:mx-5 mx-2">
                        <Link className="w-full" to={`/absent/${props.id}`}>
                            <button id="btn_pop_up_detail"  className="weverse-background-btn py-2 my-3 border-radius-8 text-white lg:w-10/12 w-full" style={{ fontSize:"14px"}}>Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}