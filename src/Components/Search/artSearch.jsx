import React, { useState, useEffect } from 'react';
import axios from 'axios';

function artSearch() {
const [departments, setDepartments]  = useState([]);

const getDepartments = async () => {
 const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
 setDepartments(response.data.departments)
}

useEffect(() => {
 getDepartments();
},  []);


return (
 <div>
  
 </div>
);
};

export default artSearch
