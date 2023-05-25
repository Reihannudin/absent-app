import {LoginCardComponent} from "../component/card/LoginCard.Component";
import {useNavigate} from "react-router-dom";
import api from "../config/api";
import {useEffect} from "react";

function Login(){

    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const auth_token = urlParams.get("auth_token");
    const user = urlParams.get("user");

    useEffect(() => {
        if (auth_token) {
            api
                .get("http://127.0.0.1:8000/api/user", {
                    method: 'POST',
                    headers: {
                        Authorization: "Bearer " + auth_token,
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    },
                })
                .then((res) => {
                    if (res) {
                        localStorage.setItem('isLogin' , true)
                        localStorage.setItem("token", auth_token);
                        localStorage.setItem("whoLogin", user);
                        navigate("/");
                    } else {
                        alert("Something wrong!");
                    }
                });
        }
    }, []);

    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="xl:w-6/12 lg:w-7/12 md:w-9/12  mx-auto">
                    <div className="md:w-8/12 w-9/12 mx-auto">
                        <LoginCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login