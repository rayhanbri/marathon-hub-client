import React, { useEffect, useState } from 'react';
import AuthHook from '../../Components/Hooks/AuthHook';
import { myMarathonApi } from '../../API/my_marathon_api';
import MyCard from './MyCard';

const MyMarathon = () => {
    const {user} = AuthHook();
    const email = user?.email;
    const [myMarathons,setMyMarathons] = useState([])
    useEffect(()=>{
         myMarathonApi(email)
         .then(setMyMarathons)
    },[email])

    console.log(myMarathons)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myMarathons.map((marathon,index)=><MyCard marathon={marathon} index={index} key={index} myMarathons={myMarathons} setMyMarathons={setMyMarathons}></MyCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyMarathon;