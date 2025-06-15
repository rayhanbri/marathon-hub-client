import React, { use } from 'react';

const Card = ({ dataPromise }) => {
    const marathons = use(dataPromise)
    console.log(marathons)

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'> 
            {
                marathons.map(marathon => <div key={marathon._id} className="card bg-base-100  shadow-sm">
                    <figure className="px-3 pt-3">
                        <img
                            src={marathon.image}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;