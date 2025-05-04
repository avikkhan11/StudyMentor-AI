import React from 'react';
import { useParams } from 'react-router-dom';

function SubjectDetail() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Subject Detail</h1>
      <p>Viewing subject with ID: {id}</p>
    </div>
  );
}

export default SubjectDetail;