import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNavbar.css';

const LeftNavbar = () => {
    return (
        <nav className="left-navbar">
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active" end>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/StudentList" activeclassname="active">
                        Student List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/CourseList" activeclassname="active">
                        Course List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ClassSchedule" activeclassname="active">
                        Class Schedule
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default LeftNavbar;
