import { useRef } from "react"
import {useState} from "react"
import emailjs from '@emailjs/browser';
import { send } from "emailjs-com";

import axios from "axios"
import "./index.css"

const Form=()=>{

    const form = useRef();
    const[data,updateData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    })


    const submitForm= async event=>{
        event.preventDefault()
        await axios.post("https://tutorial-4537e-default-rtdb.firebaseio.com/register.json",data)
        .then(()=>alert("submitted sucessfully"))

        console.log(form.current,"form")

        
      

        // emailjs.sendForm('service_tynd98i', 'template_hvlfyni', form.current,'yQ_nvma7-uNoGL8fV')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        send(
            "service_tynd98i", // Service ID
            "template_hvlfyni", // Template ID
            data,
            "yQ_nvma7-uNoGL8fV" // Public Key - https://dashboard.emailjs.com/admin/account
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
               
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
        
        updateData({
            fullName:"",
            email:"",
            password:"",
            confirmPassword:""
        })




    }

    const changeData1=(event)=>{
        updateData({...data,fullName:event.target.value})
    }

    const changeData2=(event)=>{
        updateData({...data,email:event.target.value})
    }

    const changeData3=(event)=>{
        updateData({...data,password:event.target.value})
    }


    const changeData4=(event)=>{
        updateData({...data,confirmPassword:event.target.value})
    }


    return(
        <div className="formContainer">

            <form ref={form}  className="card-container" onSubmit={submitForm}>
            <h6 className="sub-heading"> Storing Form Data Using FireBase Storage</h6>
            <input type="text" onChange={changeData1} placeholder="Enter Full Name" value={data.fullName} />
            <input type="text" onChange={changeData2} placeholder="Enter Email Adress" value={data.email}/>
            <input type="password" onChange={changeData3}  placeholder="Enter Your Password"  value={data.password}/>
            <input type="password" onChange={changeData4} value={data.confirmPassword} placeholder="Confirm Your Password" />
            <button  className="formButton" type="submit">Submit</button>
        </form>

        </div>
    )
}

export default Form