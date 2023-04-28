import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone2.png'

const QZone = () => {
    return (
        <div className='bg-light text-center my-4 py-4'>
            <h1>Q-Zone</h1>
            <div>
                <img className='img-fluid' src={QZone1} alt="" />
                <img className='img-fluid' src={QZone2} alt="" />
                <img className='img-fluid' src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;