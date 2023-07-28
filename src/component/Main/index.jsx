import React from 'react';
import Card from '../Card/index';
import PokeInfo from '../poke-info';

const Prins = () => {
    return (
        <>
            <div className='contenedor'>
                <div className='izq-contenedor'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className='dere-contenedor'>
                    <PokeInfo/>

                </div>
            
            </div>

        </>
    
    );
};

export default Prins;