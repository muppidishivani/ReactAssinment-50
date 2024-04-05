import { useRef,useState } from "react";
import axios from "axios";
const UpdateExp=()=>{
    const[res,setRes]=useState([]);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    
    const Post_data=()=>{
     PostEx();
    }
    const PostEx=async()=>
    {
        const res= await axios.put("http://localhost:9008/update/2",{"tasks":ref1.current.value,"approval":ref2.current.value,"hours":ref3.current.value});
        const {data}=res;
        setRes(data);
    }
   return(

    <>
    <center>
     <h2 style={{color: "red",background:"aqua"}}>Update Manager Record</h2>
    <table border="1">
    
     <tr style={{color: "green",background:"pink"}}>
  <th>Tasks:</th><td><input type="text" ref={ref1}></input><br></br></td></tr>
  <tr style={{color: "green",background:"pink"}}>
  <th>Approval:</th><td><input type="text" ref={ref2}></input><br></br></td></tr>
<tr style={{color: "green",background:"pink"}}>
  <th>Hours:</th><td><input type="number" ref={ref3}></input><br></br></td></tr>
    <tr style={{color: "green",background:"pink"}}></tr>
      <button onClick={Post_data}>Post</button>
     <p>{JSON.stringify(res)}</p>
     </table>
     </center>
    </>
   )
}
export default UpdateExp;