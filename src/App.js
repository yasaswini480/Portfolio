import './App.css';
import Navbar from './components/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';

function App()
{
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
