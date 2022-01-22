import React, { useContext } from 'react';
import Rating from 'react-rating';
import { RemoveContext } from '../../App';
import './CartSingleCorse.css';

const CartSingleCourse = ({ course }) => {
    const { title, rating, payment, subject, lessons, students, img, id } = course;

    const [handleRemove] = useContext(RemoveContext);


    return (
        <div className='row gx-3 p-3 single-cart'>
            <div className='col-md-3'>
                <img src={img} className='img-fluid' alt="" />
            </div>
            <div className="course-details text-start col-md-9">
                <h6 className="secondary-color fw-bold">{title}</h6>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className="text-secondary">Category: <span className="secondary-color fw-bold ms-1">{subject}</span></p>
                    <p className="text-secondary">Lectures: <span className="secondary-color fw-bold ms-1">{lessons}</span></p>
                    <p className="text-secondary">Students: <span className="secondary-color fw-bold ms-1">{students}</span></p>

                </div>
                <p className="secondary-color fw-bold">{rating} <Rating

                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"

                /></p>


                <div className="d-flex align-items-center">
                    <div className='footer-item pe-3'><button onClick={() => handleRemove(id)} className='shoppingcart-btn'>Remove</button></div>
                    <div className='footer-item pe-3 mt-1'><p className="secondary-color fw-bold mx-4  ">₹{payment}</p></div>
                    <div className='ms-4'> <a href=""> <i className="far fa-bookmark secondary-color"></i></a></div>
                </div>
            </div>
        </div>
    )
}

export default CartSingleCourse;
