import profilephoto from '../img/profilephoto.jpg'
import '../styles/SideNavbar.css';
const SideNavbar = () => {
    return (
        <div className="sidenavbar-div">
                <ul className="info-class">
                    <li><img src={profilephoto} alt="My profile" className="profile-image"/></li>
                    {/* <li><img src={profilephoto} alt="My profile" className="profile-image"/></li> */}
                    <p style={{paddingBottom:"20px"}}>SEGUN LAYOMI</p>
                    <li><span className="git"><i className="fab fa-github"></i></span><a href="https://github.com/Segun-Victor" className="gh-link" target="_blank" rel="noreferrer">@Segun-Victor</a></li>
                    <li><i className="fas fa-map-marker-alt"></i> <span className="location">Abuja,Nigeria</span></li>
                </ul>
            </div>
    );
}


export default SideNavbar;