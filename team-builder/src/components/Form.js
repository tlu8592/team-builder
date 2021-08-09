import React from 'react';

export default function Form(props) {
    const { formValues, update, submit } = props;

    const changeHandler = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const submission = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={submission}>
                <label>
                    Username:
                    <input type='text' name='username' value={formValues.username} onChange={changeHandler}/>
                </label>
                <label>
                    Email:
                    <input type='email' name='email' value={formValues.email} onChange={changeHandler} />
                </label>
                <label>
                    Role: <select name="role" onChange={changeHandler} value={formValues.role}>
                        <option>-- Select a Role --</option>
                        <option>Front-End Developer</option>
                        <option>Back-End Developer</option>
                        <option>Fullstack Developer</option>
                        <option>Data Scientist</option>
                        <option>Cyber/Network Security Specialist</option>
                    </select>
                </label>
            </form>
            <div>
                <button>Submit</button>
            </div>
        </div>
    );
}