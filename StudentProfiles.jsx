import "./StudentProfiles.css";

function StudentCard({ name, branch, year, image }) {
  return (
    <article className="student-card">
      <img src={image} alt={`${name} profile`} />
      <h3>{name}</h3>
      <p>Branch: {branch}</p>
      <p>Year: {year}</p>
    </article>
  );
}

function StudentProfiles() {
  const students = [
    {
      name: "Shiva",
      branch: "Computer Science",
      year: "Second Year",
      image: "/student-shiva.svg",
    },
    {
      name: "Anjali",
      branch: "Information Technology",
      year: "Third Year",
      image: "/student-anjali.svg",
    },
    {
      name: "Rahul",
      branch: "Electronics",
      year: "First Year",
      image: "/student-rahul.svg",
    },
  ];

  return (
    <section className="experiment-card">
      <h2>Experiment 5: Student Profile using Props</h2>
      <p className="muted-text">
        The parent component passes student data to reusable StudentCard components.
      </p>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.name}
            name={student.name}
            branch={student.branch}
            year={student.year}
            image={student.image}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentProfiles;
