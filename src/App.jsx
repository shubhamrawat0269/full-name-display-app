import { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form className="frm" onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          First Name:
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </label>
        <label htmlFor="lastname">
          Last Name:
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {show && (
        <h3>
          Full Name: {fname} {lname}
        </h3>
      )}
    </div>
  );
}

export default App;
