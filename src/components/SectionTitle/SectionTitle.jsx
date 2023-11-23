import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-10 w-4/12 mx-auto'>
            <h1 className='text-[#D99904] text-[20px] italic mb-5'>{heading}</h1>
            <h2 className='text-[40px] border-y-4 py-5 '>{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;