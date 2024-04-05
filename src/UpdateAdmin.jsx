import { useRef,useState } from "react";
import axios from "axios";
const UpdateEx=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.put("http://localhost:9003/updatedata/3",{"projects":ref1.current.value,
        "clients":ref2.current.value,"tasks":ref3.current.value});
        const {data}=res;
        setRes(data);
    }
   return(
    <>
     
 <h2 style={{color: "aqua",background:"blue"}}>Admin</h2>
  <table border="1">
    <tr style={{color: "aqua",background:"pink"}}>
  <th>Project Name:</th><td><input type="text" ref={ref1}></input><br></br></td></tr>
  <tr style={{color: "aqua",background:"pink"}}>
  <th>Tasks:</th><td><input type="text" ref={ref2}></input><br></br></td></tr>
  <tr style={{color: "aqua",background:"pink"}}>
  <th>Tasks:</th><td><input type="text" ref={ref2}></input><br></br></td></tr>
  <tr style={{color: "aqua",background:"pink"}}>
     <button onClick={Post_data}>Post</button></tr>
     <p>{JSON.stringify(res)}</p>
     </table>
    </>
   )

}
export default UpdateEx;