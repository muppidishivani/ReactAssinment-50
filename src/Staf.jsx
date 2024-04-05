import {Link,Outlet} from "react-router-dom";
const Staf=()=>{
    
    return(<>
   
    <h1 style={{backgroundColor:'pink',color:'rgb(45,89,93,0.6)'}}>Staff Information</h1>
    <Link to="staff/insert" style={{marginRight:100}}>Insert
    </Link>

    <br></br>
    <Outlet></Outlet>
    </>);
}
 export default Staf;