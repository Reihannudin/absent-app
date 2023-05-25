import {NavbarComponent} from "../component/NavbarComponent";
import {FooterComponent} from "../component/FooterComponent";
import {ContentHomeComponent} from "../component/ContentHome.Component";
import {RecentlyListComponent} from "../component/RecentlyList.Component";
import {HistoryListComponent} from "../component/HistoryListComponent";

function Home(){
    return(
        <>
            <NavbarComponent />
            <div className="h-full" style={{ background:"#FFFFFF"}}>
                <ContentHomeComponent />
                <RecentlyListComponent />
                <HistoryListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Home