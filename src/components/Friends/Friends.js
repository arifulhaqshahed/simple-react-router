import React, { useEffect, useState } from 'react';
import Friend from '../../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <>
            <div>
                <h1>This is friend component</h1>
            </div>
            <div className="friends">
                {
                    friends.map(friend => <Friend friend={friend}></Friend>)
                }
            </div>
        </>
    );
};

export default Friends;