import {useEffect} from "react";
import {CardAbsentComponent} from "./card/CardAbsent.Component";
import {CardActivityComponent} from "./card/CardActivity.Component";

export const ContentActivitiesComponent = () => {

    useEffect(() => {
        const tabsContainer = document.querySelector("#tabs");
        const tabTogglers = tabsContainer.querySelectorAll("#tabs a");

        tabTogglers.forEach(function (toggler) {
            toggler.addEventListener("click" , function (e){
                e.preventDefault();

                let tabName = this.getAttribute("href");

                let tabContents = document.querySelector("#tab-contents");

                for (let i = 0; i < tabContents.children.length; i++){
                    tabTogglers[i].parentElement.classList.remove("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" );
                    tabContents.children[i].classList.remove("hidden");

                    if("#" + tabContents.children[i].id === tabName){
                        continue;
                    }
                    tabContents.children[i].classList.add("hidden");

                    e.target.parentElement.classList.add("border-b"  , "py-1" , "-mb-px", "text-purple-500" , )
                }
            });
        });
        return () => {
            tabTogglers.forEach(function(toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, [])

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    return(
        <>
            <div  className=" md:pt-14  pt-24 ">
                <div  className=" pb-10 gap-6 ">
                   <div className="bg-white">
                       <ul id="tabs" className="inline-flex mt-3 w-10/12 mx-auto  pt-2 px-1 pb-1 text-purple-500">
                           <li className=" px-4 text-gray-800 font-normal py-2 -mb-px">
                               <a id="default-tab" href="#first">On Going</a>
                           </li>
                           <li className="px-4 text-gray-800 font-normal py-2 ">
                               <a href="#second">Done</a>
                           </li>
                           <li className="px-4 text-gray-800 font-normal py-2 ">
                               <a href="#third">Created</a>
                           </li>
                           <li className="px-4 text-gray-800 hidden font-semibold py-2 ">
                               <a href="#fourth">Tab 4</a>
                           </li>
                       </ul>
                   </div>
                    {/* Tab Contents */}
                    <div id="tab-contents" className=" w-10/12 mx-auto">
                        <div id="first" className="p-4">
                            {user === null ?(
                                <div className="gap-4 text-center mx-6" style={{ overflowX: "auto" }}>
                                    <div className="mx-auto my-14">
                                        <h2 style={{  fontSize:"18px", color:"#716f6f"}}>Tidak ada absent yang sedang berlangsung saat ini</h2>
                                        <p style={{  fontSize:"14px", color:"#716f6f"}}>Tenanglah dan kami akan memberi tahu anda jika ada absent yang berlangsung</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full py-5">
                                    <div>
                                        <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                            <CardActivityComponent />
                                            <CardActivityComponent />
                                            <CardActivityComponent />
                                            <CardActivityComponent />
                                            <CardActivityComponent />
                                            <CardActivityComponent />
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div id="second" className="hidden p-4">
                            <div className="w-full py-5">
                                <div>
                                    <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                        <CardActivityComponent />
                                        <CardActivityComponent />
                                        <CardActivityComponent />
                                        <CardActivityComponent />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="third" className="hidden p-4">
                            <div className="w-full py-5">
                                <div>
                                    <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                        <CardActivityComponent />
                                        <CardActivityComponent />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="fourth" className="hidden p-4">
                            Fourth tab
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}