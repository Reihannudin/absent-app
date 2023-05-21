import {NavbarComponent} from "../component/NavbarComponent";
import {FooterComponent} from "../component/FooterComponent";
import {ContentActivitiesComponent} from "../component/ContentActivities.Component";


function Activities(){

    return(
        <>
            <NavbarComponent />
            <div style={{ background:"#FAFBFC"}}>
                <ContentActivitiesComponent />
            </div>
            <FooterComponent />

        </>
    )
}

export default Activities