import React from 'react';

const About = ({ image, about }) => {
    const defaultImage = 'https://via.placeholder.com/150'; // Default placeholder image

    return (
        <aside>
            <img src={image || defaultImage} alt="About" />
            <p>{about}</p>
        </aside>
    );
};

export default About;