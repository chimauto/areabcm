import '../index.css';
import dream from '../img/dream.png';
import dreamrec from '../img/Rectangle 65.png'

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className = "dreamRec">
                <img src={dreamrec} alt="Dreamrec Logo" />
            </div>
            <div className = "dream">
                <img src={dream} alt="Dream Logo" />
            </div>
            <div className = "header">
                <div className = "navlinks">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Timeline</a></li>
                    <li><a href="#">Area-BCM</a></li>
                    <li><a href="#">Water Info</a></li>
                    <li><a href="#">Simulation</a></li>
                    <li><a href="#">Area BIA</a></li>
                    <li><a href="#">Register</a></li>
                </div>
                <button type="button">Sign in</button>
            </div>
        </div>
    );
}
     
export default Navbar;