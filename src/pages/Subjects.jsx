import React from 'react';
import { Link } from 'react-router-dom';

function Subjects() {
  // This would typically come from an API or state management
  const dummySubjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Computer Science' },
  ];

  return (
    <div>
      <h1>Subjects</h1>
      <ul>
        {dummySubjects.map(subject => (
          <li key={subject.id}>
            <Link to={`/subjects/${subject.id}`}>{subject.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;