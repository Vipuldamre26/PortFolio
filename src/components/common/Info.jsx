import "./info.css";
import profile from "../../assets/profile.JPG";
import { GiSandsOfTime } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Info = () => {
    return (
        <div className="info">
            <div className="info1">
                <img src={profile}></img>
                <span>Vipul Damre</span>
                <p>Hello World!</p>
            </div>

            <div className="info2">
                <div className="info2-content">
                    <GiSandsOfTime className="icon" />
                    <div className="content-s1">
                        <p>AGE</p>
                        <span>22 Years Old</span>
                    </div>
                </div>
                <div className="info2-content">
                    <FaLocationDot className="icon" />
                    <div className="content-s1">
                        <p>LOCATION</p>
                        <span>Amravati, Maharashtra</span>
                    </div>
                </div>
                <div className="info2-content">
                    <IoPersonSharp className="icon" />
                    <div className="content-s1">
                        <p>Experience</p>
                        <span>Fresher</span>
                    </div>
                </div>
                <div className="social">
                    <FaGithub className="s-icon" />
                    <FaLinkedin className="s-icon" />
                    <FaInstagram className="s-icon" />
                    <FaTwitter className="s-icon" />
                </div>
            </div>
        </div>
    );
};

export default Info;
