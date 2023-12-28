import {Component} from "react"
import {useNavigate} from "react-router-dom"

class Topper extends Component{
    state={}
    method1=()=>{
        const Navigate = useNavigate()
        console.log(Navigate)

        //Hooks should not be called in class components 
        // and also IN javascript Functions 
        //it should be called only in Top level or React functions 
        // if you have any doubt execute this program you will know
      
    }


    render(){
        return(
            <button onClick={this.method1}>
                the class adjustmenst
            </button>
        )
    }
}
export default Topper