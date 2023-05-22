import {SignUpComponent} from "../component/card/SignUp.Component";


function SignUp(){
    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="w-6/12 mx-auto">
                    <div className="w-8/12 mx-auto">
                        <SignUpComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp