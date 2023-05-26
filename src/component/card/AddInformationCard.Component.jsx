import {useState} from "react";
import {useParams} from "react-router-dom";

export const AddInformationCardComponent = () =>{
    const [name , setName] = useState('');
    // const urlParams = new URLSearchParams(window.location.search);
    // const email = urlParams.get('email')
    const { email } = useParams();
    console.log(email);

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name)
    }

    return(
        <>
            <div className="bg-white my-auto pb-12 pt-8  px-10 " style={{ borderRadius:"8px"}}>
                <div>
                    <div className="my-8" style={{ height:"24px"}}>
                        <img className="h-full" src="/assets/Wetrix-account.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Add your information Weverse Account.</h1>
                    </div>
                    <div className="text-left">
                        <div >
                            <div className="my-8">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Username</label>
                                <input type="text" required  onChange={onChangeName} value={name} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                            </div>

                            <a href={`http://127.0.0.1:8000/signup/add/information/${email}?name=${name}`}>
                                {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                                <div  className="w-full font-medium py-2.5 weverse-background-btn text-center" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" }}>Save</div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}