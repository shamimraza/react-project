import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

const PhoneBar = () => {
    const [phones, setPhones]=useState([])
    useEffect(()=>{


        axios.get(' https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loadData= data.data.data;
            console.log(loadData);
        })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default PhoneBar;