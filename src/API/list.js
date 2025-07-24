
export const list = async (email,token) => {
   
    const res = await fetch(`http://localhost:3000/my-registration?email=${email}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const data = await res.json();
    return data;
};