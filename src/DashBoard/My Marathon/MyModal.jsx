// import React, { useRef } from 'react';

const MyModal = ({ modal, title }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        const form = e.target;
        const formData = new FormData(form);
        const update = Object.fromEntries(formData.entries())
        // console.log(update)
        // console.log(modal?._id)
    }

    return (
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit} className="fieldset">
                    {/* marathonon Title */}
                    <label className="label">Marathon Title</label>
                    <input type="text" name="title" className="input input-bordered w-full" placeholder={title} defaultValue={title} 
                     readOnly />
                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full mt-4">Update Marathon</button>
                </form>

            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default MyModal;




// Start Registration Date
//     < label className = "label" > Start Registration</label >
//         <input type="date" name="startReg" className="input input-bordered w-full" defaultValue={modal?.startReg} />

// {/* End Registration Date */ }
//                             <label className="label">End Registration</label>
//                             <input type="date" name="endReg" className="input input-bordered w-full" defaultValue={modal?.endReg}/>

// {/* marathonon Start Date */ }
//                             <label className="label">Marathon Start</label>
//                             <input type="date" name="marathononDate" className="input input-bordered w-full" defaultValue={modal?.marathononDate} />

// {/* Location */ }
//                             <label className="label">Location</label>
//                             <input type="text" name="location" className="input input-bordered w-full" placeholder="Enter Location" defaultValue={modal?.location}/>
// {/* Running Distance */ }
//                             <label className="label">Running Distance</label>
//                             <select name='distance' className="select" defaultValue={modal?.distance}>
//                                 <option disabled={true}>Pick distance</option>
//                                 <option>3K</option>
//                                 <option>5K</option>
//                                 <option>10K</option>
//                             </select>
// {/* Description */ }
//                             <label className="label">Description</label>
//                             <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Write a short description..." 
//                             defaultValue={modal?.description || ''}/>

// {/* marathonon Image */ }
//                             <label className="label">marathonon Image URL</label>
//                             <input type="url" name="image" className="input input-bordered w-full" placeholder="https://image-link.com/photo.jpg" defaultValue={modal?.image}/>