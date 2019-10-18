import React, { useState, useEffect} from 'react'
import axios from 'axios';
export default function Courses() {

  const [courses, setCourses] =  useState([]);
  useEffect(()=> {
    let fetched = false;
      async function fetchCourses() {
          const result = await axios.get('http://localhost:3000/courses/all')
          if (!fetched) {
            setCourses(result.data)
          }
      }
      fetchCourses()
      return () => { fetched = true; }
    });
  return (
    <ul>
    {courses.map((item) => (
      <li key={item.name}>
        <a href={item.url}>{item.description}</a>
      </li>
    ))}
  </ul>
  )
}