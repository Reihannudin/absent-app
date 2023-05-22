import {Link} from "react-router-dom";


export const LoginCardComponent = () => {
    return(
        <>
            <div className="bg-white py-6 mb-10 px-10 " style={{ borderRadius:"8px"}}>
                <div>
                    <div className="my-8" style={{ height:"24px"}}>
                        <img className="h-full" src="/assets/Wetrix-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Log in with your Wetrix Account.</h1>
                    </div>
                    <div className="text-left">
                        <div >
                            <div className="my-8">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Email</label>
                                <input type="email" className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                            </div>
                            <div className="my-8">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Password</label>
                                <div className="flex">
                                    <input id="password" required   type="password" className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your password"/>
                                    <button >
                                        <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                        </i>
                                    </button>
                                </div>
                            </div>
                            {/*<a href="http://127.0.0.1:8000/login/form?email=${email}&password=${password}">*/}
                            <a href="/">
                                {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                                <div  className="w-full font-medium py-2.5 weverse-background-btn text-center" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #A373E9" }}>Log In</div>
                            </a>
                        </div>
                        <div className="text-center my-4">
                            <Link to="/">
                                <p style={{ color:"#777575" , fontSize:"14px" }}>Forgot password?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="my-5">
                        <div>
                            <div className="flex w-full">
                                <div className="w-full mx-5 my-auto" style={{ height:"1px",  background:"#d0d0d0"}}></div>
                                <p className="mx-auto">OR</p>
                                <div className="w-full mx-5 my-auto" style={{ height:"1px",  background:"#d0d0d0"}}></div>
                            </div>
                            <div className="block my-3" style={{ fontSize:"14px"}}>
                                <span>Don't have an account with us yet?</span><br/>
                                <Link to=""><span style={{ color:"#A373E9"}}>Create a Weverse Account</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}