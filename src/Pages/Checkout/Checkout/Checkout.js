import React from 'react';
import useCourse from '../../Home/Hook/useCourse';
import Pay from '../Pay/Pay';

const Checkout = () => {
    const [courses, setCourses] = useCourse([]);
    return (
        <div>
            <div id='courses' className='container mt-2 mb-5'>
                <h1 className='text-primary text-center mt-2 mb-2'>Pay And Get Your Course</h1>
                <div className='row gx-5 mb-5'>
                    {
                        courses.map(course => <Pay
                            key={course.id}
                            course={course}
                        ></Pay>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Checkout;