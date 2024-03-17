import './about.css';
import Navbar from '../common/Navbar';
import { GoDash } from "react-icons/go";
import { TbWorldSearch } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { MdAddAPhoto } from "react-icons/md";
import { BiSolidBookContent } from "react-icons/bi";
import { Progress } from 'rsuite';
import 'rsuite/Progress/styles/index.css';
import EmblaCarousel from './EmblaCarousel';
import './embla.css';
import finances from '../../assets/finances.png';
import music from '../../assets/music.png';
import books from '../../assets/books.png';
import camera from '../../assets/camera.png';
import iconapp from '../../assets/icon-app.svg';
import icondev from '../../assets/icon-dev.svg';
import iconframework from '../../assets/icon-frameworks.svg';
import iconmarketing from '../../assets/icon-marketing.svg';
import iconmedia from '../../assets/icon-media.svg';
import { useState } from 'react';


const About = () => {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 8;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const [showMore, setShowMore] = useState(true);


    const showMorePara = () => {
        let para = document.querySelector('.about-para');
        let more = document.querySelector('.showmore');

        if (showMore) {
            para.style.height = 'auto';
            more.innerHTML = 'Hide Text';
            setShowMore(false);
        }
        else {
            para.style.height = '7.4rem';
            more.innerHTML = 'Show More';
            setShowMore(true);
        }
    }



    return (
        <div className='about'>
            <Navbar />
            <div className='about-hero'>
                <h1>About Me</h1>
                <GoDash className='dash' />
            </div>
            <div className='about-para'>
                <p>Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>

                <p>Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.</p>

                <p>In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.</p>

                <p>If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.</p>
            </div>
            <span onClick={showMorePara} className='showmore'>Show More</span>


            <div className='about-content1'>
                <h2>Primary Focus</h2>
                <div className='content1-cards'>
                    <div className='content1-card'>
                        <img src={icondev}></img>
                        <div className='card-s'>
                            <span>Web Design & Development</span>
                            <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                        </div>
                    </div>
                    <div className='content1-card'>
                        <img src={iconapp}></img>

                        <div className='card-s'>
                            <span>Web Design & Development</span>
                            <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                        </div>
                    </div>
                    <div className='content1-card'>
                        <img src={iconframework}></img>
                        <div className='card-s'>
                            <span>Web Design & Development</span>
                            <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                        </div>
                    </div>
                    <div className='content1-card'>
                        <img src={iconmarketing}></img>

                        <div className='card-s'>
                            <span>Web Design & Development</span>
                            <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                        </div>
                    </div>
                </div>


                <div className='about-content1'>
                    <h2>Exploring Creativity</h2>
                    <div className='content1-cards'>
                        <div className='content1-card'>
                            <img src={iconapp}></img>
                            <div className='card-s'>
                                <span>Web Design & Development</span>
                                <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                            </div>
                        </div>
                        <div className='content1-card'>
                            <img src={iconmedia}></img>
                            <div className='card-s'>
                                <span>Web Design & Development</span>
                                <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='about-lang'>

                <h2>Languages</h2>
                <div className='lang'>

                    <div className='lang-main'>

                        <h3>Coding Languages</h3>

                        <div className='main-card'>
                            <p>JavaScript <span>90%</span></p>
                            <Progress.Line percent={90} strokeColor="#ffc107" />
                        </div>

                        <div className='main-card'>
                            <p>Java <span>75%</span></p>
                            <Progress.Line percent={75} strokeColor="#ffc107" />
                        </div>

                        <div className='main-card'>
                            <p>CSS <span>96%</span></p>
                            <Progress.Line percent={96} strokeColor="#ffc107" />
                        </div>

                        <div className='main-card'>
                            <p>Python <span>60%</span></p>
                            <Progress.Line percent={60} strokeColor="#ffc107" />
                        </div>

                        <div className='main-card'>
                            <p>C++ <span>65%</span></p>
                            <Progress.Line percent={65} strokeColor="#ffc107" />
                        </div>


                    </div>


                    <div className='lang-main'>

                        <h2>Human Languages</h2>

                        <div className='main-card'>
                            <p>English <span>80%</span></p>
                            <Progress.Line percent={80} strokeColor="#ffc107" />
                        </div>

                        <div className='main-card'>
                            <p>Hindi <span>90%</span></p>
                            <Progress.Line percent={90} strokeColor="#ffc107" />
                        </div>

                        <div className='main-card'>
                            <p>Marathi <span>100%</span></p>
                            <Progress.Line percent={100} strokeColor="#ffc107" />
                        </div>

                        {/* <div className='main-card'>
                            <p>Python <span>60%</span></p>
                            <Progress.Line percent={60} strokeColor="#ffc107" />
                        </div>

                        <div className='main-card'>
                            <p>C++ <span>65%</span></p>
                            <Progress.Line percent={65} strokeColor="#ffc107" />
                        </div> */}

                    </div>

                </div>
            </div>


            <div className='skills'>
                    <h2>Development Skills</h2>
                <div className='skill-items'>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>

            </div>



            <div className='activity'>
                <h2>Favourite activities</h2>
                <div className='act-cards'>
                    <div className='act-card'>
                        <img src={finances}></img>
                        <span>Investments</span>
                        <p>Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment</p>
                    </div>

                    <div className='act-card'>
                        <img src={music}></img>
                        <span>Music</span>
                        <p>Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians</p>
                    </div>

                    <div className='act-card'>
                        <img src={books}></img>
                        <span>Reading</span>
                        <p>Books on Self-Improvement, Psychology and Understanding Life Better.</p>
                    </div>

                    <div className='act-card'>
                        <img src={camera}></img>
                        <span>Photography</span>
                        <p>Capturing precious moments and memories through the lens of a camera.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About; 