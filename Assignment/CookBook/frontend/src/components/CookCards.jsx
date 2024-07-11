import React from 'react'

const CookCards = ({recipe}) => {

    const { name, ingrediant, description, price } = recipe;
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[blue] mb-2">{name}</h2>
            <p className="text-gray-700 mb-2">
                <span className='pl-2 font-bold '>Ingredients:</span> 
            </p>
            <div className='ml-8'>{ingrediant}</div>
            <p className="text-gray-700 mb-2"><span className='pl-2 font-bold '>Description:</span></p>
            <div className='ml-8'>{description}</div>
            <p className="text-gray-700"><span className='pl-2 font-bold '>Price:</span> {price}</p>
        </div>

        
    );
}

export default CookCards