import { useState, useEffect } from "react";
import axios from "axios";

function AddStudent({ fetchStudents, editStudent, setEditStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setEmail(editStudent.email);
      setCourse(editStudent.course);
    }
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editStudent) {
      axios.put(`http://localhost:8081/students/${editStudent.id}`, {
        name, email, course
      }).then(() => {
        setEditStudent(null);
        fetchStudents();
      });
    } else {
      axios.post("http://localhost:8081/students", {
        name, email, course
      }).then(fetchStudents);
    }

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name}
        onChange={(e)=>setName(e.target.value)} />

      <input placeholder="Email" value={email}
        onChange={(e)=>setEmail(e.target.value)} />

      <input placeholder="Course" value={course}
        onChange={(e)=>setCourse(e.target.value)} />

      <button type="submit">Save Student</button>
    </form>
  );
}

export default AddStudent;