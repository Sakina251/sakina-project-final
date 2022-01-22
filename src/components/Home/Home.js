import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='home-container d-flex align-items-center text-light mt-4' >
                <div className='container  text-start pb-5'>
                    <h1 className='title'>Learn and Earn!</h1>
                    
                    
                    <div className='d-flex align-items-center'>
                   
                        
                        
                        <Link to='/about' className='link home-link ms-5'>HOW IT WORKS<i className="fas fa-arrow-right secondary-color ms-2"></i></Link>
                    </div>
                </div>
            </div >
            <Courses></Courses>
        </>
    )
}

export default Home;
