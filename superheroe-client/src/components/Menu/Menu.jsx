import { NavLink } from 'react-router';
import './Menu.css';
import { useEffect, useState } from 'react';
import DarkLight from '../DarkLight/DarkLight';



export default function Menu({title}) {


    return(
        <>
            <ul>
                <li>
                    {/* se puede ahcer lo mismo con Link pero no podes
                    colorar el link en el cual estas con rojo */}
                    <NavLink to='/'>
                        home page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/favorite'>
                        preferiti
                    </NavLink>
                </li>
            </ul>

            <DarkLight/>

            <h1>{title}</h1>
        </>
    );
}