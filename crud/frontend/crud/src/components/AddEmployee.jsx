import React from "react";
import "./add.css";
const AddEmployee = ({
  name,
  setName,
  age,
  setAge,
  dept,
  setDept,
  gender,
  setGender,
  married_val,
  setMarried_val,
  handleSub,
}) => {
  function handleChange(e) {
    setMarried_val(e.target.checked);
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
        onSubmit={handleSub}
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
          {" "}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        </div>
        <div className="form-etd">
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
        </div>
        <div className="form-etd">
          <label htmlFor="marital">Marital status:</label>
          <div className="mary-opt" id="marital">
            <input
              type="checkbox"
              className="marry_val"
              name="married"
              id=""
              checked={married_val}
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
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-etd form-btn">
          <button
            type="submit"
            style={{ padding: "5px 28px" }}
            className="btn btn-success"
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
