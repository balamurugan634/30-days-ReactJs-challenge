import React from "react";
import './employeelist.css'
import { Link } from "react-router-dom";
import axios from "axios";
const EmployeeList = ({ employee_list ,handleEdit}) => {
 function handleDelete(uid){
  axios
  .post("http://localhost:3000/delete", {
    id:uid,
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
    <div className="emp-list">
      <table className="table table-light table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>name</th>
            <th>age</th>
            <th>gender</th>
            <th>marital</th>
            <th>Dept</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee_list.map((user,index) => (
            <tr key={user.id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.married === 1 ? "married" : "unmarried"}</td>
              <td>{user.dept}</td>
              <td className="emp-btn">
                <Link to={'/user-edit'} onClick={()=>handleEdit(user)}className="btn btn-success">Edit</Link>
                <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
