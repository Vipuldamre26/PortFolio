import './certificate.css';
import Navbar from '../common/Navbar';
import { GoDash } from "react-icons/go";
import certiImg from '../../assets/node.js-essentials.png';
import { RiComputerFill } from "react-icons/ri";
import { FaDotCircle } from "react-icons/fa";


const Certificate = () => {
    return (
        <div className='certificate'>
            <Navbar />
            <div className='about-hero'>
                <h1>My Certificates</h1>
                <GoDash className='dash' />
            </div>



            <div className='certi-main'>
                <h2>Technical Competence</h2>
                <RiComputerFill className='icon' />

                <div className='container left'>
                    <FaDotCircle className='dot'  />
                    <div className='certi-content'>
                        <strong>Node.Js Essentials</strong>
                        <p>LinkedIn Learning</p>
                        <img src={certiImg}></img>
                    </div>
                </div>

                <div className='container right'>
                    <FaDotCircle className='dot'  />
                    <div className='certi-content'>
                        <strong>React.Js Essentials</strong>
                        <p>LinkedIn Learning</p>
                        <img src={certiImg}></img>
                    </div>
                </div>

                <div className='container left'>
                    <FaDotCircle  className='dot' />
                    <div className='certi-content'>
                        <strong>JavaScript Essentials</strong>
                        <p>LinkedIn Learning</p>
                        <img src={certiImg}></img>
                    </div>
                </div>

                <div className='container right'>
                    <FaDotCircle className='dot'  />
                    <div className='certi-content'>
                        <strong>Fundamentals Of Digital Marketing</strong>
                        <p>Google Certified Digital Marketing Course</p>
                        <img src={certiImg}></img>
                    </div>
                </div>

                <div className='container left'>
                    <FaDotCircle className='dot' />
                    <div className='certi-content'>
                        <strong>Elements Of AI</strong>
                        <p>University of Helsinki</p>
                        <img src={certiImg}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Certificate;