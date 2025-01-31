import React, { useState, useEffect } from 'react';
import axios from 'axios';

function artSearch() {
const [departments, setDepartments]  = useState([]);
const [departmentId, setDepartmentId] = useState('');

const getDepartments = async () => {
 const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
 setDepartments(response.data.departments)
}

useEffect(() => {
 getDepartments();
},  []);


return (
 <div>
  <select value={departmentId}  onChange={(e) => setDepartmentId(e.target.value)}>
   <option value="">Select Department</option>

     {departments.map(dept => (
   <option key={dept.departmentId} value={dept.departmentId}>
    {dept.displayName}
   </option>
    ))}
  </select>
 </div>
);
};

export default artSearch
