import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import MemberList from './components/MemberList'
import axios from 'axios';

function App() {
  const [member, setMember] = useState([]);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    role: ""
  });

  const formUpdate = (inputName, inputValue) => {
    const newFormValues = {...formValues, [inputName]: inputValue };
    setFormValues(newFormValues)
  }

  const formSubmit = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    const emptyUsername = !newMember.username;
    const emptyEmail = !newMember.email;
    const emptyRole = !newMember.role;
    if (emptyUsername || emptyEmail || emptyRole) return;

    axios.post('mockapi.com', newMember)
      .then(res => {
        const newMembers = [...member, newMember];
        setMember(newMembers);
      })
      .catch(err => console.log(err));
    }
    
    useEffect(() => {
      axios.get('mockapi.com')
        .then(res => setMember(res.data))
    }, []);

  return (
    <div>
      <h1>Team Builder</h1>
      <Form formValues={formValues} update={formUpdate} submit={formSubmit} />
      <MemberList members={member} />
    </div>
  );
}

export default App;
