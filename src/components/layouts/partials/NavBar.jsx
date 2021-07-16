import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';

const NavBar = () => {

    
    const [colorChange, setColorchange] = useState(false);

    let history = useHistory();

    const scrollTo = (e, t) => {
        e.preventDefault();
        const elem = document.getElementById(t);

        if(elem){
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }else{
            history.push('/');
        }
        
    }
   
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    

    return (
        <>
             <header id="header" className="header bg-black header-nav">
                <div className="">
                
                    <div  className= ' navigation  bg-white-o'>
                        <div className="container-fluid">
                        <nav className='main-nav navbar  navbar-expand-md'  >
                          {/* <img src="images/assets/logo.svg" alt="logo" /> */}
                          <Link to="/" className="navbar-brand logo ">
                                    {/* <img src="../../images/assets/logo.svg" alt="logo" /> */}
                                    INOKOVA
                        </Link>

                        <button className="navbar-toggler collapsed on-black" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="menu_toggle on-black">
                            <span className="hamburger on-black">
                                <span />
                                <span />
                                <span />
                            </span>
                            <span className="hamburger-cross on-black">
                                <span />
                                <span />
                            </span>
                            </span>
                        </button>
                        
                        <div id="navbar-collapse" className="navbar-collapse collapse">
                            <div className="orientation">
                                 {/* left */}
                                <ul className="nav navbar-nav ">
                                    
                                    
                                   
                                </ul>
                                {/* right */}
                                <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item "><Link className="nav-link on-white font-intersemibold" to="/about">Start</Link></li>
                                    <li className="nav-item"><Link to="/about" className="nav-link on-white font-intersemibold">Crowd mining</Link></li>
                                    <li className="nav-item"><Link className="nav-link on-white font-intersemibold" to="/careers">So funkionierts</Link></li>   
                                     <li className="nav-item"><Link to="/about" className="nav-link on-white font-intersemibold">Uber uns</Link></li>
                                    <li className="nav-item"><Link className="nav-link on-white font-intersemibold" to="/careers">kontakt</Link></li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                    </div>
                
                </div>
            </header>
           
        </>
    )

}

export default NavBar;