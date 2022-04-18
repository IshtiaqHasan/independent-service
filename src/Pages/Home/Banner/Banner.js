import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>There is no doubt in this Book (2:2)</h3>
                    <p>This is the Book (the Quran), whereof there is no doubt, a guidance to those who are Al-Muttaqun [the pious and righteous persons who fear Allah much (abstain from all kinds of sins and evil deeds which He has forbidden) and love Allah much (perform all kinds of good deeds which He has ordained)].</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Allah has taken the responsibility to explain it (75:19).</h3>
                    <p>Don't worry if you can't read Quran, make a step and see how Allah help you.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Allah says He has revealed the Quran and He will protect it (15:9).</h3>
                    <p>
                        This verse of promise from Allah is enough to know that He will indeed protect the Qur'an from any errors and changes over time.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;