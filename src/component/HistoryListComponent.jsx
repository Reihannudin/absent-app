import {CardAbsentComponent} from "./card/CardAbsent.Component";
import {CardHorizontalComponent} from "./card/CardHorizontal.Component";


export const HistoryListComponent = () => {

    return(
        <>
            <div className="w-full bg-white">
                <div className="w-10/12 py-6 my-4 mx-auto">
                    <div className="mx-6 text-left ">
                        <h3 style={{ fontSize:"24px"}}>History</h3>
                    </div>
                    <div className="w-full my-4 mx-auto ">
                        <div className="gap-6 mx-6 ">
                            <CardHorizontalComponent />
                            <CardHorizontalComponent />
                            <CardHorizontalComponent />
                            <CardHorizontalComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}