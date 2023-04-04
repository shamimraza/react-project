import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-300 text-white mt-5 rounded'>
            <h2 className='text-center'>
                <span
                    className='text-purple font-extrabold'>{price.price}
                </span>
                <span className='font-bold'>/mon</span>
            </h2>

            <h5 className='text-2xl font-bold text-center my-5'>{price.name}</h5>
            <p className='underline font-bold pl-2'>features:</p>
            {
                price.features.map((feature, idx)=><Feature
                key={feature}
                feature={feature}
                ></Feature>)
            }
        <button className='hover:bg-orange-950 w-full mt-auto bg-red-500 rounded-md font-bold text-white'>Buy Now</button>
        </div>
    );
};

export default PriceCard;
