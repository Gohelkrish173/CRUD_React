import React, { useState } from "react";

const DisplayCrud = ()=>{

  const [student,setStudent]=useState([]);
  const [data,setData]=useState({Name:"",Sem:""});
  const [index,setIndex]=useState("");


  const disstudent=student.map((s,i)=>{
      return(
        <>
        <h1>{s.Name}</h1>
        <h1>{s.Sem}</h1>
        </>
      )
  });


  return(
    <>
     <h1>
      Name:
     </h1>
     <input type="text" value={data.Name}
     onChange={(e)=>{setData({...data,Name:e.target.value})}}
     />

     <h1>
      Sem:
     </h1>
     <input type="text" value={data.Sem}
     onChange={(e)=>{setData({...data,Sem:e.target.value})}}/>

     <button onClick={(e)=>{
      e.preventDefault();
      
      setStudent([...student,data]);
      // setData({Name:"",Sem:""})
     }}>Add</button>

     {disstudent}
    </>
  );
}

export default DisplayCrud;