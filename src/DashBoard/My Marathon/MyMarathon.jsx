import React, { useEffect, useState } from 'react';
import AuthHook from '../../Components/Hooks/AuthHook';
import { myMarathonApi } from '../../API/my_marathon_api';
import MyCard from './MyCard';
import MyModal from './MyModal';

const MyMarathon = () => {
    const { user } = AuthHook();
    const email = user?.email;
    const [myMarathons, setMyMarathons] = useState([])
    useEffect(() => {
        myMarathonApi(email)
            .then(setMyMarathons)
    }, [email])
    const [modal, setModal] = useState(null)

    // console.log(myMarathons)
    // console.log(modal)

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
                        myMarathons.map((marathon, index) => <MyCard marathon={marathon} index={index} key={index} myMarathons={myMarathons} setMyMarathons={setMyMarathons}
                        setModal={setModal}></MyCard>)
                    }
                </tbody>
            </table>
            <MyModal modal={modal} setModal={setModal}></MyModal>
        </div>
    );
};

export default MyMarathon;