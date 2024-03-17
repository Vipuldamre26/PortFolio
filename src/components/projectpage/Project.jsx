import './project.css';
import Navbar from '../common/Navbar';
import { GoDash } from "react-icons/go";
import projectData from './projectdata';
import { useState } from 'react';


const Project = () => {


    const[ data, setData ] = useState(projectData);

    const allItems = () => {
        setData([...projectData]);
    }

    const websites = (e) => {
        let newData = projectData.filter((item) => {
            console.log(e.target.innerHTML);
            if(e.target.innerHTML === item.type){
                return true;
            }
            return false;
        })

        console.log(newData);
        setData([newData]);
    }


    return(
        <div className='project'>
            <Navbar />
            <div className='about-hero'>
                <h1>My Projects</h1>
                <GoDash className='dash' />
            </div>

            <nav>
                <ul>
                    <li onClick={allItems}>All</li>
                    <li onClick={(e) => websites(e)}>Websites</li>
                    <li>Applications</li>
                    <li>Games</li>
                </ul>
            </nav>

            <div className='cards'>
                {
                    data.map((item) => {
                        return(
                        <div className='card' key={item.id}>
                            <img src={item.img}></img>
                            <strong>{item.p1}</strong>
                            <p>{item.p2}</p>
                            <p>{item.p3}</p>
                            <button>Preview</button>
                            <button>GitHub</button>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Project;