import { useEffect, useState } from "react";
import axios from "axios";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = () => {
    axios.get("http://localhost:8081/students")
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>

      <AddStudent fetchStudents={fetchStudents}
                  editStudent={editStudent}
                  setEditStudent={setEditStudent} />

      <StudentList students={students}
                   fetchStudents={fetchStudents}
                   setEditStudent={setEditStudent} />
    </div>
  );
}

export default App;