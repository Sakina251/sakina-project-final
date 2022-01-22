import React, { useEffect, useState} from 'react';
import { Form, Navbar,Nav,NavLink } from 'react-bootstrap';
import DetailedSingleCourse from '../DetailedSingleCourse/DetailedSingleCourse';
import './AllCourses.css';
const Courses=({items})=>{
    return(
        <Nav.Link><NavLink to='/cart' className='link'><i className="fas fa-shopping-cart text-light "></i><span className='primary-color ms-1'>{items}</span></NavLink></Nav.Link>
    )
}

const AllCourses = ({ addToCart }) => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch('./allcourses.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <>
            <div className='allcourses-header'>
                <div className='text-light'><h1 className='fw-bold'>Choose form a vast variety of courses that will make you job ready!</h1>
                    
                    
                </div>

            </div>
            <div className="allcourses-container">
                <div className="container">
                    <div className=" row my-5 gy-5 ">
                        {
                            allCourses.map(course => <DetailedSingleCourse
                                key={course.id}
                                addToCart={addToCart}
                                course={course}
                            ></DetailedSingleCourse>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllCourses;
