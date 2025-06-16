import React, { Suspense } from 'react';
import AllCard from './AllCard';
import Spinner from '../Auth/Spinner';

const AllMarathon = () => {
    const dataPromise=fetch('http://localhost:3000/marathons/list').then(res => res.json())

    // console.log(dataPromise)
    return (
        <div>
           <Suspense fallback={<Spinner></Spinner>}>
            <AllCard dataPromise={dataPromise}></AllCard>
           </Suspense>
        </div>
    );
};

export default AllMarathon;