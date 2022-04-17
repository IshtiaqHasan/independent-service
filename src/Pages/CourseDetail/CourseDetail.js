import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = ({ course }) => {
    const { courseId } = useParams();
    return (
        <div>
            <h2>Welcome to Detail: {courseId}</h2>
        </div>
    );
};

export default CourseDetail;