import React from 'react';
import Crd from './Crd';
import courses from '../courses.json';

function Cards({ num, name  }) {
  const course = courses.slice(0, num);
  return (
    <>
      <h1 className='text-2xl mt-[2%] ml-[5%] mb-[-3%] font-bold text-[purple]'>{name}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
        {course.map((crs) => (
          <Crd key={crs.id} course={crs} />
        ))}
      </div>
    </>
  );
}

export default Cards;


// import React from 'react';
// import Crd from './Crd';
// import courses from '../courses.json';

// function Cards({ num, name }) {
//   const courseList = isHome ? courses.slice(0,3) : courses;
//   return (
//     <>
//       <h1>{isHome ? 'Top Courses' : 'Browse All Courses'}</h1>
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
//         {courseList.map((crs) => (
//           <Crd key={crs.id} course={crs} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Cards;

