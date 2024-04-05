import Admin from "./Admin";
import Manager from "./Manager";
import AppEx from "./App";
import DeleteEx from "./Delete";
import GetDataExp from "./GetAll";
import AppExp from "./Insert";
import DeleteAdmin from "./DeleteAdmin";
import GetAdmin from "./GetAdmin";
import UpdateEx from "./UpdateAdmin";
import UpdateExp from "./Update";
import Staf from "./Staf";
import AppStaff from "./Staff";
import Signup from "./SingUp";
import Sign from "./Sign";
import { Link,Routes,Route } from "react-router-dom";

const Parent=()=>{
    return(
    <>
    <center style={{backgroundColor:"rgb(56,81,35,0.3)"}}>
     <h1 style={{backgroundColor:"blue",color:"red"}}>My Hours</h1>
     <Link to="" style={{marginRight:100}}>SignUp</Link>
    
    <Link to="/admin" style={{marginRight:100}}>Admin</Link>
    <Link to="/manager" style={{marginRight:100}}>Manager</Link>
    <Link to="/staff" style={{marginRight:100}}>Staff</Link>
    
    <br></br>
    <Routes>
    <Route path="/" element={<Signup></Signup>} />
 
        <Route path="/admin" element={<Admin></Admin>}>
        
        <Route path="admin/insert" element={<AppExp></AppExp>}></Route>
        <Route path="admin/delete" element={<DeleteAdmin></DeleteAdmin>}></Route>
        <Route path="admin/update" element={<UpdateEx></UpdateEx>}></Route>
       
        <Route path="admin/getall" element={<GetAdmin></GetAdmin>}></Route>
    </Route>
        <Route path="/manager"element={<Manager></Manager>}>
        <Route path="manager/app" element={<AppEx></AppEx>}></Route>
        <Route path="manager/delete" element={<DeleteEx></DeleteEx>}></Route>
        <Route path="manager/update" element={<UpdateExp></UpdateExp>}></Route>
   
        <Route path="manager/getall" element={<GetDataExp></GetDataExp>}></Route>
        </Route>
        <Route path="/staff"element={<Staf></Staf>}>
        <Route path="staff/insert" element={<AppStaff></AppStaff>}></Route>
   
       </Route>
       
       </Routes>
    
        

       </center>
    </>);
}
export default Parent