import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaRunning } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { GiPathDistance } from 'react-icons/gi';
import { MdDateRange, MdEvent } from 'react-icons/md';
import { useLoaderData } from 'react-router';

const Details = () => {
    const marathon = useLoaderData();
    const {image,title,endReg,startReg,marathonDate,location,description,distance} = marathon;
    console.log(marathon)
    return (
        <div className="card bg-base-100 shadow-sm flex ">
            <figure>
                <img
                    src={image}
                    alt="Movie"/>
            </figure>
            <div className="card-body">
                <div className="card-title text-center">{title}</div>
               <div className='md:space-y-2'>
                 <p className='flex items-center gap-0.5'><FaLocationDot className='text-red-600'/>Location : {location}</p>
                 <p className='flex items-center gap-0.5'><MdDateRange className='text-blue-600'/>Start Registration : {startReg}</p>
                 <p className='flex items-center gap-0.5'><MdDateRange
                 className='text-blue-600'/>Close Registration: {endReg}</p>
                 <p className='flex items-center gap-0.5'><MdEvent className='text-blue-600'/>Marathon Date : {marathonDate}</p>
                 <p className='flex items-center gap-0.5'><GiPathDistance
                    className='text-blue-600'/>Distance : {distance}</p>
                 <p className='flex items-center gap-0.5'><BsInfoCircle className='text-blue-600'/>Description : {description}</p>
                 
               </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">Registration</button>
                </div>
            </div>
        </div>
    );
};

export default Details;