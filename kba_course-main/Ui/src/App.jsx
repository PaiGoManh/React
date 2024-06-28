import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import View from './components/View'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <Cards/>
  <View/>
    

   </>
  )
}

export default App
