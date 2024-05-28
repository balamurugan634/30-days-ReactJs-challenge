import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [dept, setDept] = useState("ai-dev");
  const [gender, setGender] = useState("male");
  const [married_val, setMarried_val] = useState(false);
  const [employee_list,setEmployee_list]=useState([])
  const [showemp,setShowemp]=useState(false)
  function handleSub(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create", {
        name: name,
        age: age,
        married:married_val ? 1 : 0,
        dept: dept,
        gender: gender
        
      })
      .then(function(response){
        setAge(0)
        setName("")
        setDept('ai-dev')
        setGender('male')
        setMarried_val(false)
        console.log("success")}).catch(function(error){
          console.log(error)
        });
  }
  function handleTable(){
    axios.get("http://localhost:3000/employees").then(function(response){setEmployee_list(response.data)
    setShowemp(true)
    console.log(response.data)
      // console.log(employee_list)
    }).catch((err)=>{
      console.log(err)
    })
  }
  function handleChange(e) {
    
      setMarried_val(e.target.checked);
    
  }
  return (
    <div className="add-sec">
      <form onSubmit={handleSub} className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <div className="gender" id="gender">
          <input
            type="radio"
            name="gender"
            value={"male"}
            checked={gender == "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value={"female"}
            checked={gender == "female"}
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </div>

        <label htmlFor="dept">Department</label>
        <div className="dept-opt" id="dept">
          <select
            name="dept"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          >
            <option value="web-dev">Web-developer</option>
            <option value="app-dev">App-developer</option>
            <option value="ai-dev">Ai-developer</option>
          </select>
        </div>
        <label htmlFor="marital">Marital status:</label>
        <div className="mary-opt" id="marital">
        <input type="checkbox" name="married" id="" checked={married_val} onChange={handleChange}/>married

        </div>

        <label htmlFor="age">age</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          add
        </button>
      </form>
{ !showemp ?    <button onClick={handleTable} className="btn btn-primary">employee list</button>:<button onClick={()=>setShowemp(false)} className="btn btn-primary">close list</button>}
   {showemp &&   <div className="emp-list">
        <table>
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
        {employee_list.map((user)=>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.married===1?'married':'unmarried'}</td>
            <td>{user.dept}</td>
          </tr>
        )}
        </tbody>
        </table>
      </div>}
    </div>
  );
}

export default App;
