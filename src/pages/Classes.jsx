import {NavbarComponent} from "../component/NavbarComponent";
import {ContentActivitiesComponent} from "../component/ContentActivities.Component";
import {ContentClassComponent} from "../component/ContentClass.Component";
import {FooterComponent} from "../component/FooterComponent";


function Classes (){
    return(
        <>
            <NavbarComponent />
            <div style={{ background:"#FFFFFF"}}>
                <ContentClassComponent />
            </div>
            <FooterComponent />

        </>
    )
}

export default Classes