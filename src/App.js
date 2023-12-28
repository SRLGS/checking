import {Route,BrowserRouter,Routes} from "react-router-dom"
import Filteration from "./Components/Filteration"
import Hooks from "./Components/Categories"
import Topper from "./Components/Propping"
import Telugu from "./Components/Telugu"
import CheckingInputting from "./Components/CheckingInputting"
import Writer from "./Components/Typewriter"
import Learning from "./Components/Learning"
import UpArrow from "./Components/UpArrow"
import Data from "./Components/Data"
import Form from "./Components/Form"
import Calender from "./Components/Calender"
import Testing from "./Components/Fcomponents"
import {connect} from "react-redux"
import Navbar from "./Components/Navbar"

function App(){

 return(
  <BrowserRouter>
  <Navbar />
  <UpArrow/>
  <Routes>
    <Route exact path="/" Component={Filteration}/>
    <Route exact path="/Hooks" Component={Hooks} />
    <Route exact path="/Topper" Component={Topper}/>
    <Route  exact path="/t1" Component={Telugu}/>
    <Route exact path="/TW" Component={Writer}/>
    <Route exact path="/TF" Component={CheckingInputting}/>
    <Route exact path="/L" Component={Learning}/>
    <Route exact path="/F" Component={Form}/>
    <Route exact path="/d" Component={Data}/>
    <Route exact path="/messages" Component={Data}/>
    <Route exact path="/ravi" Component={Data}/>
    <Route exact path="/sai" Component={Data}/>
    <Route exact path="/t/:name" Component={Testing}/>
    <Route exact path="/c" Component={Calender}/>
        </Routes>
  </BrowserRouter>

 )
}

const mapStateToProps=state=>({
  local_variable:state
})

export default connect(mapStateToProps) (App);
