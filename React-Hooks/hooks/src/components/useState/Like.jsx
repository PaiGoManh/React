import React, { useState } from 'react';

const Demo = () => {
  const [like, setLike] = useState('Not Liked');

  return (
    <div>
      <h1>{like}</h1>
      <button onClick={()=>{
        if (like === 'Liked') {
            setLike('Not Liked');
        } else {
            setLike('Liked');
        }
      }}>
        Like
      </button>
    </div>
  );
};

export default Demo;
