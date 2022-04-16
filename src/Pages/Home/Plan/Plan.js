import React from 'react';

const Plan = ({ plan }) => {
    const { name, day, ClassType, ClassDuration, CoursePeriod, Gender, Languages } = plan;
    return (
        <div className=' container gx-5 gy-1 col-sm-12 col-md-6 col-lg-4'>
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h1 className='text-primary'>{name}</h1>
                    <h5>{day} classes</h5>
                    <h5>Class Type: {ClassType}</h5>
                    <h6>ClassDuration: {ClassDuration}</h6>
                    <h6>CoursePeriod: {CoursePeriod}</h6>
                    <h6>Gender: {Gender}</h6>
                    <h6>Languages: {Languages}</h6>
                    <button href="#" className="btn btn-primary">Choose The Plan</button>
                </div>
            </div>
        </div>
    );
};

export default Plan;