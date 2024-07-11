import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const [name,setName] = useState('');
    const [ingrediant,setIngrediant] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const navigate = useNavigate();

    const RecipeAdd = async (recipe) =>{
        const res = await fetch('http://localhost:5000/addrecipe',{
            method : "POST",
            headers :{
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(recipe)
        })
        return res
    };

    const recipeForm = (e) =>{
        e.preventDefault();
        const recipe = {
            name,ingrediant,description,price
        }
        const res = RecipeAdd(recipe)
        alert("Recipe Added Succesfully")
        navigate('/home')
    }


  return (
    <div>
        <section class="bg-white mb-20">
        <div class="container m-auto max-w-2xl py-2">
          <div class="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

            <form onSubmit={recipeForm}>
              <h2 class="text-3xl text-purple-800 text-center font-semibold mb-6">
                Add Recipe
              </h2>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="border rounded w-full py-2 px-3 mb-2"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}

                />
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Ingredeiants
                </label>
                <input
                  type="text"
                  id="courseId"
                  name="courseId"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. 1"
                  required
                  value={ingrediant}
                  onChange={(e) => setIngrediant(e.target.value)}
                />
              </div>


              <div class="mb-4">
                <label
                  htmlFor="description"
                  class="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  class="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Small description on the course"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  id="courseId"
                  name="courseId"
                  class="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. 1"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>


              <div>
                <button
                  class="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddRecipe