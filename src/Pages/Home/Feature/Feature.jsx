import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg';
import './Feature.css';

const Feature = () => {
    return (
        <div className='featuredSection bg-fixed text-white pt-10 '>
            <SectionTitle subHeading={'FROM OUR MENU'} heading={'---Check it out---'}></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center gap-4 py-14 px-16'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div>
                    <p className='text-[20px]'>March 20, 2023</p>
                    <p className='uppercase text-[20px]'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;