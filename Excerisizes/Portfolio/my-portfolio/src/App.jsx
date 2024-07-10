import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import pic from './assets/3.png'

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <section id="home">
          <div className="flex">
            <div className="flex-1 ml-24 pt-[15%]">
              <div className="text-orange-500">Hello!</div>
              <div className="text-white font-bold pt-8">
                <div className="text-5xl">I'm <span className="text-orange-500">Rahul</span></div>
                <div className="text-5xl text-orange-500">Sajeevan</div>
              </div>
              <div className="text-white pt-12 text-2xl">Front-End Developer</div>
            </div>
            <div className="flex-1 pt-32">
              <img src={pic} alt="Profile" className="w-[70%]" />
            </div>
          </div>
        </section>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
