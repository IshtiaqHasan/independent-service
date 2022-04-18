import React from 'react';
import teacher from '../../images/teacher/teacher.jpg';
import quran from '../../images/quran/quran.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <div className=" about-me-info">
                <img width="150" height="150" src={teacher} alt="" />
                <h2 className='text-primary mt-2'>Learn Quran With Abdullah</h2>
                <h5>My Qualifications:</h5>
                <ul>
                    <li>Memorizing the Qur'an</li>
                    <li>Have considerable knowledge of Makharij and tajweed</li>
                    <li>Ability to teach basic Islamic curriculum</li>
                    <li>Proficient in Arabic,Bangla & English language</li>
                </ul>

            </div>
            <div>
                <img className='shadow-lg p-3 mb-5 bg-body rounded m-5' width="400" height="400" src={quran} alt="" />
            </div>

        </div >
    );
};

export default About;