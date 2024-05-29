import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import UserEdit from "./components/UserEdit";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [dept, setDept] = useState("ai-dev");
  const [gender, setGender] = useState("male");
  const [married_val, setMarried_val] = useState(false);
  const [employee_list, setEmployee_list] = useState([]);
  const [editval, setEditval] = useState([]);
  const [showemp, setShowemp] = useState(false);
  // const [showadd, setShowadd] = useState(false);
  useEffect(() => {
    handleTable();
  }, [showemp]);
  useEffect(() => {
    handleTable();
  }, []);
  function handleSub(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create", {
        name: name,
        age: age,
        married: married_val ? 1 : 0,
        dept: dept,
        gender: gender,
      })
      .then(function (response) {
        setAge(0);
        setName("");
        setDept("ai-dev");
        setGender("male");
        setMarried_val(false);
        setShowemp(true);

        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleTable() {
    axios
      .get("http://localhost:3000/employees")
      .then(function (response) {
        // console.log(typeof(response.data))
        setEmployee_list(response.data);
        // console.log(response.data);
        // console.log(employee_list)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleEdit(user) {
    setEditval(user)
    // editval.map((val)=>console.log(val.id))
  }
  // function handlechange(e){
  //   const event=e.target.name;
  //   // console.log(event)
  //   const  value=e.target.type==="checkbox"?e.target.checked:e.target.value;
  //   // console.log(value)
  //   setEditval({[event]:value})
  //   console.log(editval)
      
  // }
  return (
    <>
      <div className="add-sec">
        <BrowserRouter>
          <Header handleTable={handleTable} />

          <Routes>
            <Route
              path="/add"
              element={
                <AddEmployee
                  name={name}
                  setName={setName}
                  age={age}
                  setAge={setAge}
                  dept={dept}
                  setDept={setDept}
                  gender={gender}
                  setGender={setGender}
                  married_val={married_val}
                  setMarried_val={setMarried_val}
                  handleSub={handleSub}
                />
              }
            />
            <Route
              path="/"
              element={
                <EmployeeList
                  employee_list={employee_list}
                  handleEdit={handleEdit}
                />
              }
            />
            <Route
              path="/user-edit"
              element={<UserEdit editval={editval}  setEditval={setEditval}/>}
            />
          </Routes>
        </BrowserRouter>

        {/* <button onClick={handleTable} className="btn btn-primary">
          employee list
        </button> */}

        {/* <div className="emp-list">
          <table className="table table-light table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
                <th>marital</th>
                <th>Dept</th>
              </tr>
            </thead>
            <tbody>
              {employee_list.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.married === 1 ? "married" : "unmarried"}</td>
                  <td>{user.dept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
}

export default App;
