import React from 'react';
import Center from './footer/Center';
import Left from './footer/Left';
import Right from './footer/Right';

const Footer = ({notes}) => {
    return (
        <div className='footer'>
            <Left/>
            <Center notes={notes}/>
            <Right/>
        </div>
    );
};

export default Footer;