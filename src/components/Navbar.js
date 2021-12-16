import React from 'react'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { AlertContext } from "../context/alert/alertContext";


export const Navbar = () => {
    
    const {hide} = useContext(AlertContext)

    return (
        <nav className = "navbar navbar-light navbar-expand-lg bg-light">
            <div className="navbar-brand" style={{marginLeft: 16}}>
                Elon Task
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink 
                        className="nav-link"
                        to="/"exact
                        onClick={hide}
                    >
                        Список задач
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        className="nav-link"
                        to="/create"
                        onClick={hide}
                    >
                        Создать задачу
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

        // <form onSubmit={submitHandler}>
        //     <div className="form-group">
        //         <input 
        //             type="text" 
        //             className="form-control"
        //             placeholder="Поиск"
        //             value={value}
        //             onChange={e => {
        //                 setValue(e.target.value)
        //                 updateNotes(e.target.value)
        //             }}
        //         />
        //     </div>
        // </form>
