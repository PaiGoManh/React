import React, { useEffect, useState } from 'react';
import Crd from './Crd';

function Cards({ num, name }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:5000/courses');
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const course = courses.slice(0, num);
  return (
    <>
      <h1 className='text-2xl mt-[2%] ml-[5%] mb-[-3%] font-bold text-[purple]'>{name}</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
          {course.map((crs) => (
            <Crd key={crs.id} course={crs} />
          ))}
        </div>
      )}
    </>
  );
}

export default Cards;
