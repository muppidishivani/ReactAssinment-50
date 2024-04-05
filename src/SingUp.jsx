import { useRef,useState } from "react";
import axios from "axios";
const Signup=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
   
   
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.post("http://localhost:9008/signup",{"userName":ref1.current.value,
        "password":ref2.current.value,"role":ref3.current.value});
        const {data}=res;
        setRes(data);
       
    }
   return(
    <>
   
  <h2 style={{color: "red",background:"aqua"}}>SIGNUP</h2>
  <table border="1">
    
    <tr style={{color: "green",background:"pink"}}>
  <th>User Name:</th><td><input type="text" ref={ref1}></input><br></br></td></tr>
  <tr style={{color: "green",background:"pink"}}>
  <th>Password:</th><td><input type="text" ref={ref2}></input><br></br></td></tr>
  
  <div>
  <tr style={{color: "green",background:"pink"}}>
          <label style={{color: "green",background:"pink"}}>Role:</label>
          <select name="role" ref={ref3} >
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
            <option value="administration">Administration</option>
          </select>
          </tr>
        </div>
    <tr style={{color: "green",background:"pink"}}>
        <button onClick={Post_data}>Post</button></tr> 
     </table>
     <p>{JSON.stringify(res)}</p>
    </>
   )
}
export default Signup;