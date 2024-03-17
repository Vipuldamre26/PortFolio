import './more.css';
import { GoDash } from "react-icons/go";
import Navbar from '../common/Navbar';
import moreData from './moreData';


const More = () => {


    return (
        <div className='more'>
            <Navbar />
            <div className='about-hero'>
                <h1>My Projects</h1>
                <GoDash className='dash' />
            </div>


            <div className='more-section'>
                {
                    moreData.map((item) => {
                        return (
                            <div className='section' key={item.id}>
                                <img src={item.img}></img>
                                <div className='section-content'>
                                    <span>{item.span}</span>
                                    <h2>{item.h2}</h2>
                                    <p>{item.para}</p>
                                </div>
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


export default More;