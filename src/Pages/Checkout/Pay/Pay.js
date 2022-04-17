import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pay = ({ course }) => {
    const { name, fee, id, description, img, day, ClassType, ClassDuration, CoursePeriod, Gender, Languages } = course;
    const navigate = useNavigate();
    const navigateToCourseDetail = id => {
        navigate(`/course/${id}`)
    }
    return (
        <div className='gx-3 gy-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="shadow-lg p-3 mb-5 bg-body rounded-3 h-100 position-relative " >
                <img width="150" height="150" src={img} className="card-img-top course-image" alt="..." />
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <h5>{day} classes</h5>
                    <h5>Class Type: {ClassType}</h5>
                    <h6>ClassDuration: {ClassDuration}</h6>
                    <h6>CoursePeriod: {CoursePeriod}</h6>
                    <h6>Gender: {Gender}</h6>
                    <h6>Languages: {Languages}</h6>
                    <button onClick={() => navigateToCourseDetail(id)} className="btn btn-primary position-absolute ">Pay Now ${fee}</button>
                </div>
            </div>
        </div>
    );
};

export default Pay;