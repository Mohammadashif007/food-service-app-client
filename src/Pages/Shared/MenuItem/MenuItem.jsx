import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className='flex items-center space-x-2'>
            <img className='w-[100px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]' src={image} alt="" />
            <div>
                <p className='text-2xl uppercase'>{name}--------------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-[20px]'>${price}</p>
        </div>
    );
};

export default MenuItem;