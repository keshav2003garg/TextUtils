import React, {useState} from 'react'
import Navbar from "./components/Navbar"
import TextForms from "./components/TextForms"
import Alert from './components/Alert'

export default function App() {
    const [mode, setMode] = useState("light")
    const [alert, setAlert] = useState(null)
    const [disable, setdisable] = useState("Enable")
    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(()=>{
            setAlert(null)
        },1000)
    }
    const toggleMode = ()=>{
        if(mode==="light"){
            setMode("dark")
            setdisable("Disable")
            document.body.style.backgroundColor = "#181818"
            showAlert("Dark Mode has been sucessfully enabled ")
        }
        else{
            setMode("light")
            setdisable("Enable")
            document.body.style.backgroundColor = "#ffffff"
            showAlert("Dark Mode has been sucessfully disabled ")
        }
    }
    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} disable={disable} />
            <Alert alert={alert} />
            <TextForms heading="Enter the text to analyse below" title="Your Text Summary" mode={mode} showAlert={showAlert} />
        </>
    )
}
