import React from 'react';
import Crd from './Crd';
import courses from '../../courses.json';

function Cards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
      {courses.map((c) => (
        <Crd key={c.id} props={c} />
      ))}
      FrontEnd Developer
    </div>
  );
}
export default Cards;
