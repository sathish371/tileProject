
import React from 'react';
import "../EmployeeCard.css"

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h2>{employee.name}</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
    </div>
  );
};

export default EmployeeCard;
