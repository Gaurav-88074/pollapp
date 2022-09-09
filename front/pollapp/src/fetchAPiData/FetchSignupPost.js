import React from 'react'

const FetchSignupPost =async (obj) => {
    console.log(obj);
    const postRequest = await fetch(`http://127.0.0.1:8000/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data :obj
        })
    });
    
}

export default FetchSignupPost