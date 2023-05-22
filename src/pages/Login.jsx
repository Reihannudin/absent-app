import {LoginCardComponent} from "../component/card/LoginCard.Component";

function Login(){
    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="w-6/12 mx-auto">
                    <div className="w-8/12 mx-auto">
                        <LoginCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login