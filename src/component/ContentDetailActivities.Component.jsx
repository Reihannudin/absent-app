import {CardActivityComponent} from "./card/CardActivity.Component";


export const ContentDetailActivitiesComponent = () => {
    return(
        <>
            <div className="pt-2">
                <div  className=" pb-10 gap-6 ">
                    <div className="bg-white">
                        <div className="w-10/12 mx-auto grid grid-cols-2">
                            <div className="text-left mx-10 my-6">
                                <div className=" mb-6  text-left" style={{ height:"24px"}}>
                                    <img className="text-left my-auto h-full" src="/assets/Wetrix.svg" alt="" />
                                </div>
                                <div className="w-full pb-3">
                                    <div className="flex justify-between">
                                        <div>
                                            <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Date</label>
                                            <p className="my-0 py-0" style={{ fontSize:"15px"}}>Thurstday, MAR 26 2022</p>
                                        </div>
                                        <div>
                                            <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Teacher</label>
                                            <p className="my-0 py-0" style={{ fontSize:"15px"}}>Eko Kurniawan Khannedy</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="my-0 py-0"  style={{ fontSize:"14px"}}>Time</label>
                                        <p className="my-0 py-0" style={{ fontSize:"15px"}}>06:00 - 07:30</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="block pt-3 gap-4 w-10/12 ">
                                    <h1 style={{ fontSize:"22px" , fontWeight:"450"}}>Terms of reference</h1>
                                    <p className="my-2" style={{ fontSize:"14px" , color:"#3e3e3e"}}>Each member is required to be absent before the specified deadline, Each member is welcome to choose to use the absent method that has been provided, This absence will be saved automatically, if you are successfully absent</p>
                                </div>
                                <div>
                                    <img src="/assets/absent-img.svg"/>
                                </div>
                            </div>
                            <div className="w-7/12 my-5 mx-auto">
                                <div className="shadow pb-6 border-radius-8">
                                    <div className="flex mx-4 py-5 justify-between">
                                        <h2 style={{ fontSize:"18px"}}>Your Absent</h2>
                                        <p className="my-1" style={{fontSize:"14px"}}>To Absent</p>
                                    </div>
                                    <div className="mx-4">
                                        <button className="w-full py-2 weverse-background-btn text-white border-radius-4">
                                            Absent now
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}