import {CardAbsentComponent} from "./card/CardAbsent.Component";
import {Link} from "react-router-dom";

export const RecentlyListComponent = () => {
    return(
        <>
            <div className="w-full py-5  mt-5 lg:mb-10 md:mb-5 bg-white">
                <div className="lg:w-10/12 md:w-11/12  w-10/12 mx-auto">
                    <div className="flex mx-6 justify-between">
                        <div>
                            <h3 style={{ fontSize:"24px"}}>Activity Recently</h3>
                        </div>
                        <div>
                            <Link to={`/`}>
                                <p className="my-auto" style={{ fontSize:"18px" , margin:"3px 0px"}}>See All</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full my-4 mx-auto">
                        <div className="flex gap-4 overscroll-x-auto mx-6" style={{ overflowX: "auto" }}>
                            <CardAbsentComponent />
                            <CardAbsentComponent />
                            <CardAbsentComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}