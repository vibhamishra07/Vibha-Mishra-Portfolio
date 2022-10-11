import React from "react";
import './Home.css';
import image2 from '../Images/image2.png';
const Home =()=>{
    return (
        <>
        <div className="home-box" id="home">
            <div className="image-box">
                {/* <div class='image-background-clip'></div> */}
                <img src={image2} alt='vibha-mishra-pic' ></img>
            </div>
            
        </div>
        </>
    )
}
export default Home;