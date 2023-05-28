import {Link} from "react-router-dom";

export const CardPeopleClassComponent = (props) => {

    return(
        <>
            <div className="bg-white w-full  my-5 border-radius-8 shadow">
                <div className="w-full justify-between flex">
                    <div className="grid grid-cols-2 my-2 text-left">
                        <div className="w-full py-3  mx-5 text-left">
                            <h3>{props.name}</h3>
                        </div>
                        <div className="w-full py-3  text-left">
                            <h3>{props.email}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}