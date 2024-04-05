import {Link,Outlet} from "react-router-dom";
const Sign=()=>{
    
    return(<>
   
    <h1>SignUp</h1>
<img src="C:\Users\Shaik\Pictures\Screenshots\Screenshot (1).png" alt="message"></img>
    <Link to="/" style={{marginRight:100}}>Login 
    </Link>

    <br></br>
    <Outlet></Outlet>
    </>);
}
 export default Sign;