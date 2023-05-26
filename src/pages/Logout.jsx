import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import http from "../config/http";
import api from "../config/api";

function Logout(){

    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const auth_token = urlParams.get("auth_token");
    const isLogin = urlParams.get("isLogin");
    const whoLogin = urlParams.get("whoLogin");

    console.log("You success to access login")

    useEffect(() => {
        if (auth_token){
            api.get("http://127.0.0.1:8000/api/logout", {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    Authorization: "Bearer " + auth_token,
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                },
            })
                .then((res) => {
                    if(res) {
                        console.log("You success to access login")
                        localStorage.setItem('isLogin' , isLogin)
                        localStorage.setItem('whoLogin' , whoLogin)
                        localStorage.setItem('token' , auth_token);
                        navigate("/")
                    } else {
                        alert("Something wrong!")
                    }
                })
        }
    }, []);

}

export default Logout