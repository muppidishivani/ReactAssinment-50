import {useEffect,useState} from "react"
import axios from "axios"
const GetAdmin=()=>{
const [arr,setArr]=useState([]);
const getData=async ()=>{
const res=await axios.get("http://localhost:9008/getAll");
const {data}=res;
setArr(data);

}
useEffect(()=>{
  getData();
},[]);
return(
  
  <>
  
  
<div className="container mt-5">
  <center>
  <h2 style={{color: "red",background:"aqua"}}>Admin Information</h2>
 
<table border="1">
 
<thead>
<tr>
  <th>Id</th>
  <th>PROJECTS</th>
  <th>CLIENTS</th>
  <th>TASKS</th>
 
  
</tr>
</thead>
<tbody>
  {
    arr.map((element,index)=>{
      return(
<tr key={index}>
<td>{element.id}</td>
<td>{element.projects}</td>
<td>{element.clients}</td>
<td>{element.tasks}</td>



</tr>


      )
    })
  }
</tbody>
<tfoot></tfoot>
</table>
</center>
</div>
  </>
)
}
export default GetAdmin;