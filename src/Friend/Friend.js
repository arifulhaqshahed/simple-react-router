import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { id, name, email, phone } = props.friend;
    const navigate = useNavigate();
    const handleFriendClick = () => {
        navigate(`/friend/${id}`);
    }

    return (
        <div className="single-friend">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h4>Phone: {phone}</h4>
            <Link to={`/friend/${id}`}>Visit me</Link>
            <br />
            <Link to={`/friend/${id}`}>
                <button>Visit me</button>
            </Link><br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;