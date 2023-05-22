import React, {useEffect} from "react";
import {CardActivityComponent} from "./card/CardActivity.Component";
import {CardClassComponent} from "./card/CardClass.Component";
import {CardClassDetailComponent} from "./card/CardClassDetail.Component";
import {CardPeopleComponent} from "./card/CardPeople.Component";

export const ContentClassComponent = () => {

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

                    e.target.parentElement.classList.add("border-b" , "bg-white" , "py-1" , "-mb-px", "text-purple-500" , )
                }
            });
        });
        return () => {
            tabTogglers.forEach(function(toggler) {
                toggler.removeEventListener("click", () => {});
            });
        };
    }, [])


    return(
        <>
            <div  className=" md:pt-14 pt-24 ">
                <div  className=" pb-10 gap-6 ">
                    <div className="bg-white">
                        <div className="mx-auto">
                            <ul id="tabs" className="inline-flex mt-1 w-4/12 mx-auto justify-between  pt-2 px-1 pb-1 text-purple-500">
                                <li className=" px-4 border-b text-gray-800  font-normal  py-2 -mb-px">
                                    <a id="default-tab" href="#first">Classes</a>
                                </li>
                                <li className="px-4 text-gray-800 font-normal py-2 ">
                                    <a href="#second">My Class</a>
                                </li>
                                <li className="px-4 text-gray-800 hidden font-semibold py-2 ">
                                    <a href="#fourth">Tab 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Tab Contents */}
                    <div id="tab-contents" className=" w-10/12 mx-auto">
                        <div id="first" className="p-4">
                            <div className="w-full py-5">
                                <div>
                                    <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                        <CardClassComponent />
                                        <CardClassComponent />
                                        <CardClassComponent />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="second" className="hidden p-4">
                            <div className="w-full py-5">
                                <div>
                                    <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                                        <CardClassComponent />
                                        <CardClassComponent />

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
