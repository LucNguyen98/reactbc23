import React, { useRef, useState } from 'react'

export default function DemoUseRef() {
    // const [values, setvalues] = useState({ username: '', password: '' });
    const userLoginRef = useRef({ username: '', password: '' });
    const userNameRef = useRef();
    const passRef = useRef();
    const handleChange = (event) => {
        const { value, id } = event.target;
        userLoginRef.current[id] = value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('userLogin', userLoginRef.current);
        userNameRef.current.style.color = 'red'
    }

    console.log('userNameRef', userNameRef.current)

    return (
        <div className="container">
            <h3>Login</h3>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input ref={userNameRef} type="text" name="username" id="username" className="form-control" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input ref={passRef} type="text" name="password" id="password" className="form-control" onChange={handleChange} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}
