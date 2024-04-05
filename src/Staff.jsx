import { useRef,useState } from "react";
import axios from "axios";
const AppStaff=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const ref5=useRef(null);
   
   
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.post("http://localhost:9008/saverecord",{"fullName":ref1.current.value,
        "projectName":ref2.current.value,"tasks":ref3.current.value,"date":ref4.current.value,"hours":ref5.current.value});
        const {data}=res;
        setRes(data);
       
    }
   return(
    <>
   
   <h2 style={{color: "red",background:"aqua"}}>Staff Information</h2>
  <table border="1">
    
    <tr style={{color: "green",background:"aqua"}}>
  <th>Full Name:</th>
  <td><input type="text" ref={ref1}></input></td></tr>
  <tr style={{color: "green",background:"aqua"}}>
 <th>Project Name:</th> 
 <td><input type="text" ref={ref2}></input></td></tr>
 <tr style={{color: "green",background:"aqua"}}>
  <th>Tasks:</th>
  <td><input type="text" ref={ref3}></input></td></tr>
  <tr style={{color: "green",background:"aqua"}}>
  
 <th> Date:</th>
 <td><input type="date" ref={ref4}></input></td></tr>
 <tr style={{color: "green",background:"aqua"}}>
  
  <th>Hours:</th>
  <td><input type="number" ref={ref5}></input></td></tr>
  <tr style={{color: "green",background:"aqua"}}>
 
     <button onClick={Post_data}>Post</button></tr>
     <p>{JSON.stringify(res)}</p>
     </table>
    </>
   )
}
export default AppStaff;