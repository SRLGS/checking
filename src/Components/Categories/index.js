import {useState,useEffect} from "react"
import {Navigate,useNavigate,useLocation,useParams} from "react-router-dom"
import 
{Styling} from "./styledComponents"
import "./index.css"
let token

const statements=["Nothing is Permanent","Happiness is key to Success","The Movement You see","Labyrinth Global Solutions"]
const colors=["skyblue","green","red","purple"]

const Hooks=()=>{
    const [statement,update1]=useState("")
    const[color,update2]=useState("")
    const Navigating=useNavigate()
    const Location =useLocation()
    const params= useParams()
    console.log(Location,params)

    useEffect(()=>{
        let interval1= setInterval(tick1,1000)
        let interval2= setInterval(tick2,1000)
        return()=>{
            clearInterval(interval1)
            clearInterval(interval2)
        }
    },[])

    const change=()=>{
        Navigating("/",{replace:true})
    }

    const tick1=()=>{
        const number=Math.floor(Math.random()*statements.length)

        update1(statements[number])
    }

    const tick2=()=>{
        const number=Math.floor(Math.random()*colors.length)
       
    }
     document.title=statement

     /*if(token===undefined){
        return <Navigate to="/"/>
            
     }*/
    
    return(
        <div className="bg-container">
            <h1 >{statement}</h1>
            <Styling as="button"  onClick={change}>Game Changer</Styling>
        </div>
    )

}
export default Hooks