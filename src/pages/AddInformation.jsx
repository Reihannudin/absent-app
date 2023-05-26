import {AddInformationCardComponent} from "../component/card/AddInformationCard.Component";

function AddInformation(){
    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12 w-9/12 mx-auto">
                        <AddInformationCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddInformation