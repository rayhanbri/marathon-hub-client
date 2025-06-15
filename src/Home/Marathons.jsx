import React, { Suspense } from 'react';
import Card from './Card';
import Spinner from '../Components/Auth/Spinner';

const Marathons = () => {
    const dataPromise=fetch('http://localhost:3000/marathons').then(res => res.json())
    return (
        <div>
            <h1 className='text-4xl font-bold mt-2 md:mt-4'>Marathons </h1>
          <Suspense  fallback={<Spinner></Spinner>}>
            <Card  dataPromise={dataPromise}></Card>
        </Suspense>  
        </div>
    );
};

export default Marathons;