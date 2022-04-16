import React from 'react';

const Course = ({ course }) => {
    const { name, fee, id, description, img } = course;
    return (
        <div className='gx-5 gy-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="shadow-lg p-3 mb-5 bg-body rounded-3 h-100 position-relative " >
                <img width="200" height="200" src={img} className="card-img-top course-image" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>{description}</small></p>
                    <h4>Course Fee: ${fee}</h4>
                    <button href="#" className="btn btn-primary position-absolute ">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;