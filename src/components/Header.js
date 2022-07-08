import React from 'react';

function Header() {
return (    
        
        <div className="container" >
                <div className="row">
                        <div style={{width:"15%"}}></div>
                                <div className="column">
                                <img src="./img/1.svg" alt="IEEE COMPUTER SOCIETY" style={{width:"130px"}  }/>
                                </div>
                                <div className="column">
                                <img src="./img/2.svg"  alt = "IEEE ROBOTICS AND AUTOMATION SOCIETY " style={{width:"130px"}}/>
                                </div>
                                <div className="column">
                                <img src="./img/3.svg" alt = "IEEE CIRCUITS AND SYSTEMS SOCIETY " style={{width:"130px"}}/>
                                </div>
                                <div className="column">
                                <img src="./img/4.svg" alt = "IEEE WOMEN IN ENGINEERING "  style={{width:"130px"}}/>
                                </div>
                                
                        </div>
                        
                </div>
                

        );
}

export default Header;