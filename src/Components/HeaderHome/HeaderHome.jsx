import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HeaderHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink activeStyle={{ borderRadius: '10px' }} activeClassName='bg-white text-dark' className="nav-link" to="home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="register">Register</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="usestate">UseState</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="useeffect">UseEffect</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="btqlnd">ReactForm</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="apircc">To do app RCC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="apirfc">To do app Rfc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{ borderRadius: '10px' }} className="nav-link" activeClassName='bg-white text-dark' to="customhooks">CustomHooks</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LifeCycle Hooks</NavLink>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="usecallback">UseCallback</NavLink>
                                <NavLink className="dropdown-item" to="usememo">UseMemo</NavLink>
                                <NavLink className="dropdown-item" to="useRef">UseRef</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux thunk middleware</NavLink>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="todolistapp">To do list app</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}
