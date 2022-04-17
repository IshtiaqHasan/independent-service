import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseDetail = ({ course }) => {
    const { courseId } = useParams();
    return (
        <div>
            <h2 className='text-center m-5'>Welcome To This Course</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed To Course</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetail;