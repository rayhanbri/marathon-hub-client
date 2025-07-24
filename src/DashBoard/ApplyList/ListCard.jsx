import React from 'react';
import Swal from 'sweetalert2';

const ListCard = ({ list, index,setAllList,allList }) => {
     const handleDelte = (id) => {
            console.log(id)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/registration/${id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                // Optionally, refresh the task list here
                                setAllList(allList.filter(list => list._id !== id));
                            }
                        });
                }
            });
        }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{list?.title}</td>
            <td>{list.marathonDate}</td>
            <td>
                <div className='flex md:gap-2'>
                    <button
                        className='btn btn-primary'>Update</button>
                    <button onClick={()=>handleDelte(list._id)} className='btn bg-red-600 '>Delete</button>
                </div>

            </td>
        </tr>
    );
};

export default ListCard;