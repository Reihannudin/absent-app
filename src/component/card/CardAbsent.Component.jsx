
export const CardAbsentComponent = (props) => {
    return(
        <>
            { props.absent_id === null ? (
                <div className="bg-white shadow border-radius-8" style={{ minWidth:"200px" , maxWidth:"200px", width:"200px"}}>
                    <div className="w-full">
                        <div className="w-full">
                            <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                        </div>
                        <div className="block text-left mx-4 py-2 gap-4">
                            <h2 className="font-normal">{props.classes_name}</h2>
                            {/*<h3 style={{ fontSize:"14px"}}>{}</h3>*/}
                            <div className="flex justify-between my-2">
                                <h3 style={{ fontSize:"14px"}}>{props.vocational_name}</h3>
                                {/*<h3 style={{ fontSize:"14px"}}>{props.classes_name}</h3>*/}
                            </div>
                            <button className="weverse-background-btn mt-3 py-0.5 mb-1 text-white w-full border-radius-8">Detail</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white shadow border-radius-8" style={{ minWidth:"200px" , maxWidth:"200px", width:"200px"}}>
                    <div className="w-full">
                        <div className="w-full">
                            <img className="w-full h-full border-radius-8" src="/assets/bg-absence.svg" />
                        </div>
                        <div className="block text-left mx-4 py-2 gap-4">
                            <h2 className="font-normal">{props.absent_name}</h2>
                            {/*<h3 style={{ fontSize:"14px"}}>{}</h3>*/}
                            <div className="flex justify-between my-2">
                                <h3 style={{ fontSize:"14px"}}>{props.vocational_name}</h3>
                                {/*<h3 style={{ fontSize:"14px"}}>{props.classes_name}</h3>*/}
                            </div>
                            <button className="weverse-background-btn mt-3 py-0.5 mb-1 text-white w-full border-radius-8">Detail</button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}