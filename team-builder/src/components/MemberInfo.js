import React from 'react';

export default function MemberInfo(props) {
    const { member } = props
    
    return (
        <div>
            <h1>{member.username}</h1>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
        </div>
    )
}