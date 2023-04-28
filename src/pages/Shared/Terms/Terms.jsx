import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our terms and conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque magnam corporis rem pariatur sit voluptatem in architecto maxime. Modi, dignissimos vero natus eligendi facilis deleniti voluptatibus earum doloremque suscipit libero!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;