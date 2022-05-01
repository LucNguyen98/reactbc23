import React, { useState } from 'react'
import useForm from './useForm';
import useCounter from './useCounter'
import useAxios from './useAxios';

export default function CustomHooks() {

  const { values, handleChange } = useForm({
    username: '',
    email: '',
    password: ''
  });

  const { count, increase, decrease } = useCounter();

  const { data } = useAxios({
    url: 'api/ToDoList/GetAllTask',
    method: 'GET'
  })

  // console.table(data)

  return (
    <div className='container'>
      <div className="form-group">
        <label htmlFor='username' >Username</label>
        <input type="text" name='username' id='username' className="form-control" value={values.username} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor='email'>Email</label>
        <input type="email" name='email' id='email' className="form-control" value={values.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor='password' >Password</label>
        <input type="password" name='password' id='password' className="form-control" value={values.password} onChange={handleChange} />
      </div>

      <div className="form-group">
        <button type="button" className="btn btn-outline-primary" onClick={decrease}>-</button>
        <span className="mx-2">Count: {count}</span>
        <button type="button" className="btn btn-outline-primary" onClick={increase}>+</button>
      </div>

    </div>
  )
}

