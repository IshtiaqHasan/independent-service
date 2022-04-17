import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import useCourse from '../Hook/useCourse';

const Courses = () => {
    const [courses, setCourses] = useCourse([]);
    return (
        <div id='courses' className='container'>
            <h1 className='text-primary text-center mt-5 mb-2'>My Quran Teaching Courses</h1>
            <div className='row gx-5'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;