import {useState, useEffect} from 'react'
import axios from "axios";

function LoadImages() {
    const [state, setState] = useState([])
    useEffect(() => {
    axios
    .get("https://api.unsplash.com/photos/?client_id=2zvfFzOqANPErlr8PMr3Czeev5xpR-NuNawuHPmtsp0")
    .then((data) => {
        console.log(data.data)
    })
})
    return state;

}

export {LoadImages}
