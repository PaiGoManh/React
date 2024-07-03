import { createContext, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Cards from './components/Cards'
// import View from './components/View'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import CoursePage from './pages/CoursePage';
// import MainLayout from './Layout/MainLayout';
import Notfound from './pages/Notfound';
import Contact from './pages/Contact';
import AddCourses from './pages/AddCourses';
import ViewCourses, { fetchCourse } from './pages/ViewCourses';
import EditCoursePage from './pages/EditCoursePage';
import SignupPage from './pages/SignupPage';
import MainLayout from './Layout/MainLayout';
import LoginPage, { userTypeLoader } from './pages/LoginPage';

function App() {
  // const [count, setCount] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/main/*' element={<MainLayout />} />
      </>
    )
  );

  return (
    <>
      {/* <Navbar/>
      <Hero/>
      <Cards/>
      <View/> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
