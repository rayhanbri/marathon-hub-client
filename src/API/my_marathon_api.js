export const myMarathonApi = (email,token) =>{
    return fetch(`http://localhost:3000/marathons/list?email=${email}`,{
         method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(res => res.json())
}