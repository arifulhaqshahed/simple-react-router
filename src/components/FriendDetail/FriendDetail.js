import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/friends");
    }

    return (
        <div>
            <h3>Detail of: {friendId} </h3>
            <h3>{friend.name}</h3>
            <h4>{friend.phone}</h4>
            <p>works at: {friend.company?.name}</p>
            <button onClick={handleClick}>See all Friend</button>
        </div>
    );
};

export default FriendDetail;