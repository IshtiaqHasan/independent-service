import React from 'react';
import Plan from '../Plan/Plan';
const plans = [
    { id: 1, name: 'Plan #A', day: '3 days', ClassType: 'One-to-One', ClassDuration: '40 minutes', CoursePeriod: "According to student's ability", Gender: 'Both Male/Female', Languages: 'Bangla/English/Arabic' },
    { id: 2, name: 'Plan #B', day: '4 days', ClassType: 'One-to-One', ClassDuration: '30 minutes', CoursePeriod: "According to student's ability", Gender: 'Both Male/Female', Languages: 'Bangla/English/Arabic' },
    { id: 3, name: 'Plan #C', day: '2 days', ClassType: 'One-to-One', ClassDuration: '50 minutes', CoursePeriod: "According to student's ability", Gender: 'Both Male/Female', Languages: 'Bangla/English/Arabic' }
]

const Plans = () => {
    return (
        <div id='plans' className='container mb-5'>
            <h1 className='text-primary text-center mt-5 mb-5'>Choose Best Plans For Ramadan</h1>
            <div className='row'>
                {
                    plans.map(plan => <Plan
                        key={plan.id}
                        plan={plan}
                    ></Plan>)
                }
            </div>

        </div>
    );
};

export default Plans;