export const myMarathonApi = (email) =>{
    return fetch(`http://localhost:3000/marathons/list?email=${email}`).then(res => res.json())
}