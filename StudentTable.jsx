import { useState } from "react";
import "./StudentTable.css";

function StudentTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    { id: 1, name: "Aarav", branch: "CSE", year: "First Year" },
    { id: 2, name: "Diya", branch: "IT", year: "Second Year" },
    { id: 3, name: "Kiran", branch: "ECE", year: "Third Year" },
    { id: 4, name: "Meera", branch: "CSE", year: "Second Year" },
    { id: 5, name: "Nikhil", branch: "EEE", year: "Final Year" },
    { id: 6, name: "Pooja", branch: "IT", year: "First Year" },
    { id: 7, name: "Rohan", branch: "MECH", year: "Third Year" },
    { id: 8, name: "Sneha", branch: "CSE", year: "Final Year" },
    { id: 9, name: "Varun", branch: "CIVIL", year: "Second Year" },
    { id: 10, name: "Zoya", branch: "ECE", year: "First Year" },
    { id: 11, name: "Ishaan", branch: "IT", year: "Final Year" },
    { id: 12, name: "Neha", branch: "CSE", year: "Third Year" },
  ];

  const recordsPerPage = 5;

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredStudents.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <section className="experiment-card">
      <h2>Experiment 6: Student Table with Search & Pagination</h2>
      <p className="muted-text">
        This table filters student names and displays five records per page.
      </p>

      <label htmlFor="student-search" className="table-label">
        Search Student by Name
      </label>
      <input
        id="student-search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Example: Aarav"
      />

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.length === 0 ? (
              <tr>
                <td colSpan="4">No students found.</td>
              </tr>
            ) : (
              currentStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.branch}</td>
                  <td>{student.year}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-row">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {filteredStudents.length === 0 ? 0 : currentPage} of {totalPages || 0}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default StudentTable;
