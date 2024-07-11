
import React, { useState, useEffect } from 'react';
import CookCard from '../components/CookCards';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:5000/recipes'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="container mx-auto max-w-7xl py-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">MY FOOD RECIPES</h1>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {recipes.map((recipe) => (
                    <CookCard key={recipe._id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Home;
