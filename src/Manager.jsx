import {Link,Outlet} from "react-router-dom";
const Manager=()=>{
    
    return(<>
   
    <h2 style={{backgroundColor:"yellow",color:"aqua"}}>Manager Information</h2>
    <Link to="manager/app" style={{marginRight:100}}>Insert</Link>
    <Link to="manager/delete" style={{marginRight:100}}> Delete </Link>
    <Link to="manager/update" style={{marginRight:100}}>Update</Link>
    
    <Link to="manager/getall" style={{marginRight:100}}>GetAll 
    </Link>
    <br></br>
    <Outlet></Outlet>
    </>);
}
 export default Manager;