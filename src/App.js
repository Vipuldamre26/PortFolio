
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/aboutpage/AboutMe';
import Certificate from './components/certificatepage/Certificate';
import Project from './components/projectpage/Project';
import Contact from './components/contactpage/Contact';
import More from './components/morepage/More';
import Info from './components/common/Info';


const router = createBrowserRouter([
  {
    path: '/',
    element: <About />
  },
  {
    path: '/certificate',
    element: <Certificate />
  },
  {
    path: '/project',
    element: <Project />
  },
  {
    path: '/more',
    element: <More />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

function App() {
  return (
    <div className='main'>
      <Info />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
