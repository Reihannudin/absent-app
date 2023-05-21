import {CardAbsentComponent} from "./card/CardAbsent.Component";

export const RecentlyListComponent = () => {
    return(
        <>
            <div className="w-10/12  mx-auto">
                <div className="flex mx-6 justify-between">
                    <div>
                        <h3 style={{ fontSize:"24px"}}>Activity Recently</h3>
                    </div>
                    <div>
                        <p className="my-auto" style={{ fontSize:"18px" , margin:"3px 0px"}}>See All</p>
                    </div>
                </div>
                <div className="w-full my-4 mx-auto ">
                    <div className="flex gap-4 overscroll-x-auto mx-6 ">
                        <CardAbsentComponent />
                        <CardAbsentComponent />
                        <CardAbsentComponent />
                    </div>
                </div>
            </div>
        </>
    )
}