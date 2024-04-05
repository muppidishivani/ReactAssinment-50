import { Link,Outlet } from "react-router-dom";

const Admin=()=>{
   
    return(<>
    <h2 style={{backgroundColor:"pink",color:"green"}}>Administrator Information</h2>
    <Link to="admin/insert" style={{marginRight:100}}>Insert</Link>
    <Link to="admin/delete" style={{marginRight:100}}>Delete</Link>
    <Link to="admin/update" style={{marginRight:100}}>update</Link>

    <Link to="admin/getall" style={{marginRight:100}}>GetAll</Link>
  
    <br></br>
    <Outlet></Outlet>
    </>);
}
export default Admin;