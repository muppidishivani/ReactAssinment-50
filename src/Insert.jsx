import { useRef,useState } from "react";
import axios from "axios";
const AppExp=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
   
   
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.post("http://localhost:9008/savedata",{"projects":ref1.current.value,
        "clients":ref2.current.value,"tasks":ref3.current.value});
        const {data}=res;
        setRes(data);
       
    }
   return(
    <>
 <h2 style={{color: "red",background:"aqua"}}>Admin</h2>
  <table border="1">
    <tr style={{color: "aqua",background:"yellow"}}>
  <th>Project Name:</th><td><input type="text" ref={ref1}></input><br></br></td></tr>
  <tr style={{color: "aqua",background:"yellow"}}>
  <th>Tasks:</th><td><input type="text" ref={ref2}></input><br></br></td></tr>
  <tr style={{color: "aqua",background:"yellow"}}>
  <th>Tasks:</th><td><input type="text" ref={ref2}></input><br></br></td></tr>
  <tr style={{color: "aqua",background:"yellow"}}>
     <button onClick={Post_data}>Post</button></tr>
     <p>{JSON.stringify(res)}</p>
     </table>
    </>
   )
}
export default AppExp;