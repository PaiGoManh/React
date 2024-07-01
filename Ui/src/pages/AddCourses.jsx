import React from 'react'
import Navbar from '../components/Navbar'

const AddCourses = () => {
  return (

    <>
    <Navbar/>
    <div>
      <section class="bg-white mb-20">
    <div class="container m-auto max-w-2xl py-2">
      <div class="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        
        <form>
          <h2 class="text-3xl text-purple-800 text-center font-semibold mb-6">
            Add Course
          </h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Certified Blockchain Associate"
              required
              
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              Course Id
            </label>
            <input
              type="text"
              id="courseId"
              name="courseId"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. 1"
              required
              
            />
          </div>

          <div class="mb-4">
            <label
              htmlFor="type"
              class="block text-gray-700 font-bold mb-2"
            >
              Course Type
            </label>
            <select
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            
            >
              <option value="Self-Paced">Self-Paced</option>
              <option value="Instructor-Led">Instructor-Led</option>
              <option value="Hybrid">Hybrid</option>
            </select>
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
            
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              htmlFor="type"
              class="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <select
              id="price"
              name="price"
              class="border rounded w-full py-2 px-3"
              required
              
            >
              <option value="Rs.5000">Rs.5000</option>
              <option value="Rs.3500">Rs.3500</option>
              <option value="Rs.15000">Rs.15000</option>
            </select>
          </div>

          <div>
            <button
              class="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
    </div>
    </>
  )
}

export default AddCourses