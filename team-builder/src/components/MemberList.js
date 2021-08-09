import React from 'react';
import MemberInfo from './MemberInfo';

export default function MemberList(props) {
    const { members } = props;

    return (
        <div>
            <h1>Members</h1>
            {members.map((member, index) => <MemberInfo key={member[index]} member={member} />)}
        </div>
    );
}