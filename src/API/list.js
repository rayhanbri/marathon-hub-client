export const list = (email) =>{
    return fetch(`http://localhost:3000/my-registration?email=${email}`).then(res => res.json())
}