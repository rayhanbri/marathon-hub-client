import React, { useEffect, useState } from 'react';
import AuthHook from '../../Components/Hooks/AuthHook';
import { list } from '../../API/list';
import ListCard from './ListCard';
import Spinner from '../../Components/Auth/Spinner';

const ApplyList = () => {
    const [allList,setAllList] = useState([]);
    const {user,setLoading} = AuthHook();
    const email = user?.email || user?.providerData[0].email;


    useEffect(()=> {
        list(email)
        .then(setAllList)
        setLoading(false)
    },[email,setLoading])
   
    console.log(allList)

    
   
    return (
       <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {
                    allList.map((list,index) =><ListCard list={list}
                    index={index}
                    setAllList={setAllList}
                    allList={allList}
                     key={index}></ListCard>)
                   }
                </tbody>
            </table>
            
        </div>
    );
};

export default ApplyList;