import React, { useState } from "react";
import "./add.css";
import axios from "axios";
const UserEdit = ({ editval, setEditval }) => {
  const [editname,setEditname]=useState(editval.name)
  const [editage,setEditage]=useState(editval.age)
  const [editgender,setEditgender]=useState(editval.gender)
  const [editdept,setEditdept]=useState(editval.dept)
  const [editmarried,setEditmarried]=useState(editval.married)
  const[editid,setEditid]=useState(editval.id)
 function handleChange(e){
  setEditmarried(e.target.checked)
 }
 function handleUpdate(e){
     e.preventDefault();
    axios
      .post("http://localhost:3000/update", {
        id:editid,
        name: editname,
        age: editage,
        married: editmarried ? 1 : 0,
        dept: editdept,
        gender: editgender,
      })
      .then(function (response) {
        // setAge(0);
        // setName("");
        // setDept("ai-dev");
        // setGender("male");
        // setMarried_val(false);
        // setShowemp(true);
        window.location.replace("http://localhost:5173/")
        // console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
 }
  return (
    <div
      className="emp-main"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        
        className="form"
        style={{
          minWidth: "400px",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div className="form-etd">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={editname}
            onChange={(e)=>setEditname(e.target.value)}
            required
          />
        </div>
        <div className="form-etd">
          <label htmlFor="gender">Gender</label>
          <div className="gender" id="gender">
            <input
              type="radio"
              name="gender"
              value={"male"}
              onChange={(e)=>setEditgender(e.target.value)}
              checked={editgender === "male"}


            />
            Male
            <input
              type="radio"
              name="gender"
              value={"female"}
              onChange={(e)=>setEditgender(e.target.value)}
              checked={editgender === "female"}
            />
            Female
          </div>
        </div>
        <div className="form-etd">
          <label htmlFor="dept">Department</label>
          <div className="dept-opt" id="dept">
            <select
              name="dept"
              value={editdept}
              onChange={(e)=>setEditdept(e.target.value)}
              >
              <option value="web-dev">Web-developer</option>
              <option value="app-dev">App-developer</option>
              <option value="ai-dev">Ai-developer</option>
            </select>
          </div>
        </div>
        <div className="form-etd">
          <label htmlFor="marital">Marital status:</label>
          <div className="mary-opt" id="marital">
            <input
              type="checkbox"
              className="marry_val"
              name="married"
              id=""
              checked={editmarried}
              onChange={handleChange}
            />
            married
          </div>
        </div>

        <div className="form-etd">
          <label htmlFor="age">age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={editage}
            onChange={(e)=>setEditage(e.target.value)}
            required
          />
        </div>
        <div className="form-etd form-btn">
          <button
            type="submit"
            style={{ padding: "5px 28px" }}
            className="btn btn-success"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
