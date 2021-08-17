import React from 'react';
import '../styles/TopNav.css';

const Home = () => {
    return (
        <div>
            <h1 style={{margin:"10% 0 10px 20px"}}>Welcome!</h1>
            <div className="about-info">
                <h3>About</h3>
                <p>I’m a front-end deveoper, I love solving real world problems.</p>
                <p>I have about a year expirience with modern programming languages</p>
                <p>like and various web technologies.</p>
                <p>Languages,frameworks and web technolgies worked with:</p>
                <p className="language-logo">
                    <span className="js-logo"><i className="devicon-javascript-plain colored"></i></span>
                    <span className="react-logo"><i className="devicon-react-original colored"></i></span>
                    <span className="html-logo"><i className="devicon-html5-plain colored"></i></span>
                    <span className="css-logo"><i className="devicon-css3-plain colored"></i></span>
                </p>
        </div>
        </div>
    );
}
 
export default Home;