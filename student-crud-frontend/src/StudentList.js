import axios from "axios";

function StudentList({ students, fetchStudents, setEditStudent }) {

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8081/students/${id}`)
      .then(fetchStudents);
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.map((s) => (
        <div key={s.id}>
          {s.name} | {s.email} | {s.course}
          <button onClick={() => setEditStudent(s)}>Update</button>
          <button onClick={() => deleteStudent(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;