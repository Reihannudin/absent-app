import {useParams} from "react-router-dom";


function Test(){

    // const urlParams = new URLSearchParams(window.location.search);
    // const test = urlParams.get('test')

    const { test } = useParams();
    console.log(test);

    const handleCreateLocalStorage = () => {
        const data = 'Hello, local storage!';
        localStorage.setItem('myItem', data);
    };

    return(
        <>
            <div>
                <button onClick={handleCreateLocalStorage}>Create Local Storage</button>
            </div>
        </>
    )
}

export default Test