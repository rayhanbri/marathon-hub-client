import React, { Suspense } from 'react';
import Card from './Card';
import Spinner from '../Components/Auth/Spinner';

const Marathons = () => {
    const dataPromise=fetch('http://localhost:3000/marathons').then(res => res.json())
    return (
        <div  >
          <Suspense  fallback={<Spinner></Spinner>}>
            <Card  dataPromise={dataPromise}></Card>
        </Suspense>  
        </div>
    );
};

export default Marathons;