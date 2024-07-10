import React, { useState } from 'react';

const Demo = () => {
  const [like, setLike] = useState(0);

  return (
    <div>
      <h1>{like}</h1>
      <button onClick={() => setLike(like + 1)}>
        Like
      </button>
    </div>
  );
};

export default Demo;