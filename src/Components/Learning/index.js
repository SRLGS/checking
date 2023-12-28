import {useState,useEffect} from "react"

import axios from "axios"
const Learning=()=>{
    const[data,updated]=useState("")

    useEffect(()=>{
       const getData= async()=>{
  
           const response=  await axios.get("https://jsonplaceholder.typicode.com/todos")
         
           console.log(response.data,response)
        }
        getData()

        },[])
       


    return(
        <div className="apiContainer">
            <h1>{data}</h1>
        </div>
    )



}

export default Learning