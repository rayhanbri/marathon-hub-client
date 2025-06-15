export const details = (_id) =>{
    return fetch(`http://localhost:3000/details/${_id}`).then(res =>res.json())
} 

