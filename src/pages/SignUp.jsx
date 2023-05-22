import {SignUpComponent} from "../component/card/SignUp.Component";


function SignUp(){
    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12 mx-auto">
                    <div className="md:w-8/12 w-9/12 mx-auto">
                        <SignUpComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp