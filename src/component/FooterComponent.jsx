import {Link} from "react-router-dom";
import React from "react";

export const FooterComponent = () => {
    return(
        <>
            <footer className="w-full py-6 bg-white" >
                <div className="w-10/12 mx-auto">
                    <div className="my-3" style={{ height:"30px"}}>
                        <img className="w-full my-auto h-full" src="/assets/Wetrix.svg" alt="" />
                    </div>
                    <div className="w-7/12 mb-8 mt-10 mx-auto">
                        <ul className="flex gap-5 font-medium mx-auto" style={{ fontSize:"15px" , color:"#8a8a8a"}}>
                            <li className="mx-auto hover:text-purple-500">
                                <Link>
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li className="mx-auto hover:text-purple-500">
                                <Link>
                                    <span>Terms of Use</span>
                                </Link>
                            </li>
                            <li className="mx-auto hover:text-purple-500">
                                <Link>
                                    <span>Terms of Use for Paid Service</span>
                                </Link>
                            </li>
                            <li className="mx-auto hover:text-purple-500">
                                <Link>
                                    <span>Cookie Policy</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-5/12 mb-6  mx-auto">
                        <ul className="flex gap-5 font-medium mx-auto" style={{ fontSize:"15px" , color:"#8a8a8a"}}>
                            <li className="mx-auto hover:text-purple-500">
                                <Link>
                                    <span>Absent Online</span>
                                </Link>
                            </li>
                            <li className="mx-auto hover:text-purple-500">
                                <Link>
                                    <span>Developer</span>
                                </Link>
                            </li>
                            <li className="mx-auto hover:text-purple-500">
                                <Link>
                                    <span>Support Me</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-10/12 my-7 mx-auto">
                        <p className="text-center font-normal" style={{ fontSize:"12px" ,  color:"#706f6f"}}>
                            COMPANYWEVERSE COMPANY Inc.CEOJOON WON CHOICALL CENTER(+82)-2-2097-1830FAX(+82)-2-2144-9399ADDRESSC, 6F, PangyoTech-onetower, 131, Bundangnaegok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of KoreaPERSONAL INFORMATION OFFICERRyeo, Sung Koo (privacy@weverseshop.io)BUSINESS REGISTRATION NUMBER716-87-01158 Business RegistrationMAIL ORDER BUSINESS REGISTRATION NUMBER2022-Seongnam Bundang A-0557HOSTED BYAmazon Web Services, Inc.
                            <br/>
                            <br/>
                            Weverse Shop is the e-commerce intermediary of the merch, not the direct e-commerce seller. Thus, Weverse Shop bears no responsibility for the merch, transaction information of the merch and the transaction of the merch. The shipping management and shipping responsibility of tangible products fall on Weverse Company.
                            <br/>
                            <br/>
                            Copyright by WEVERSE COMPANY INC. or its affiliates (WEVERSE JAPAN & WEVERSE AMERICA Inc) All rights reserved.
                        </p>
                    </div>
                    <div >
                        <span className="font-medium" style={{ fontSize:"14px" ,  color:"#565656"}}>© WETRIX.SPACE 2023 Made With Luv By Sonyeondan </span>
                    </div>
                </div>
            </footer>
        </>
    )
}