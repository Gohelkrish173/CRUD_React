import React, { useState } from "react";

const DisplayStudent = () => {
  const [student, setStudent] = useState([]);
  const [data, setData] = useState({ Name: "", Sem: "" });
  const [index,setIndex] = useState("");

  const disStu = student.map((s,i) => {
    return (
      <>
        <h1>Name : {s.Name}</h1>
        <h2>Sem : {s.Sem}</h2>
        <div className="actionbtn2">
          <button style={{"margin-right":"10px"}} onClick={(e)=>{
            e.preventDefault();
            setData({...data,Name : s.Name,Sem:s.Sem});
            
            setIndex(i);
            
            const addedit = document.getElementById('addedit');
            addedit.innerHTML = "Edit";
            
          }}>Edit</button>

          <button onClick={(e)=>{
            e.preventDefault();

            student.splice(i,1);
            setStudent([...student]);
          }}>Delete</button>
        </div>
        <span>------------------------------------------</span>
      </>
    );
  })

  return (
    <>
      <div className="actionbtn">
        <div style={{"margin" : "10px"}}>
          <h3>Name : </h3>
          <input type="text" value={data.Name} onChange={(e) => {
            setData({ ...data, Name: e.target.value });
          }} />
        </div>

        <div>
          <h3>Sem : </h3>
          <input type="text" value={data.Sem} onChange={(e) => {
            setData({ ...data, Sem: e.target.value });
          }} />
        </div>
      </div>

      <div className="actionbtn">
        <button id="addedit" onClick={(e) => {
          e.preventDefault();

          if(document.getElementById('addedit').innerHTML == "add"){
            setStudent([data, ...student]);
            setData({ ...data, Name: "", Sem: "" });
          }

          else{
            student[index] = data;
            setData({ ...data, Name: "", Sem: "" });
            document.getElementById('addedit').innerHTML = "add";
          }
        }}>add</button>
      </div>

      {disStu}
    </>
  );
}

export default DisplayStudent;