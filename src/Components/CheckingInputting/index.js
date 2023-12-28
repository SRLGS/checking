import {useState} from "react"
import TextField from '@mui/material/TextField';
import "./index.css"
const CheckingInputting=()=>{
  const[condition1,setcondition1]=useState(true)
  const[condition2,setcondition2]=useState(true)
  const[value1,setvalue1]=useState("")
  const[value2,setvalue2]=useState("")

  const changing1=(event)=>{
    setvalue1(event.target.value)

  }

  const changing2=(event)=>{
    setvalue2(event.target.value)

  }

  const change1=event=>{
    if(event.target.value===""){
      setcondition1(false)
    }else{
      
      setcondition1(true)
    }
  }

  const change2=event=>{
    if(event.target.value===""){
      setcondition2(false)
    }else{
     
      setcondition2(true)
    }
  }

    return(
        <div className="filedContainer">
          
            <div className="card-container">
            <h6>Confirm Password</h6>
            {condition1?(<TextField
            className="input"
            onChange={changing1}
            onBlur={change1}
            value={value1}
          label="Password"
          type="password"/>):( <TextField
            className="input"
            onChange={changing1}
            onBlur={change1}
            value={value1}
          error
          type="password"
          label="Password"
        
        />)}
         {condition2?(<TextField
         className="input"
         onChange={changing2}
         onBlur={change2}
          value={value2}
          label="ConfirmPassword"
          type="password"
        />):(<TextField
          onChange={changing2}
          className="input"
          value={value2}
          onBlur={change2}
        error
          label="ConfirmPassword"
          type="password"/>
          )}
        <button type="submit" className="submitButton">Submit</button>
        </div>
        </div>
    )

}
export default CheckingInputting