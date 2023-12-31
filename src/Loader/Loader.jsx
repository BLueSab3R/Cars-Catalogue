import React from 'react';
import './loader.scss';

export const Loader = () => {
    return (
        <div className='loader__wrapper'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}